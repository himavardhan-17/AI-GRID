"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function RegisterPage(): JSX.Element {
  // keep your provided docs.google URL with embedded=true
  const registrationUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSffq6h6enHaRCFrWxt0DR5VCQ-wbxEDb9IW7lAoLFPXlMUCmQ/viewform";

  const [loading, setLoading] = useState(true);
  // `blocked` becomes true if the iframe appears to refuse connection / be framed
  const [blocked, setBlocked] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    let checkTimer: number | undefined;

    // if iframe doesn't load within this time OR we cannot access contentWindow (cross-origin),
    // assume it's blocked and show fallback. We still respect onLoad to clear this.
    checkTimer = window.setTimeout(() => {
      // If onLoad never fired yet, we'll perform a light probe:
      if (!iframeRef.current) {
        setBlocked(true);
        setLoading(false);
        return;
      }

      try {
        // Attempt to read a benign property of contentWindow.
        // This will throw if cross-origin or access is blocked.
        // If it throws, we mark as blocked.
        // If it does not throw, the iframe has loaded same-origin content (unlikely here),
        // so we leave blocked=false.
        // NOTE: This is only a best-effort probe; cross-origin access is expected -> will throw.
        // However some browsers may still allow `contentWindow` access without full DOM access;
        // thus we also use the load event to detect success.
        // tslint:disable-next-line: no-unused-expression
        // @ts-ignore - runtime probe
        const cw = iframeRef.current.contentWindow;
        // try reading location (this will throw on cross-origin in many browsers)
        // @ts-ignore
        const _ = cw && cw.location && cw.location.href;
        // If we get here, assume it's not blocked (rare for docs.google).
      } catch (err) {
        // Access denied -> probably blocked by X-Frame-Options / CSP
        setBlocked(true);
        setLoading(false);
      }
    }, 2000); // 2s probe window

    return () => {
      if (checkTimer) window.clearTimeout(checkTimer);
    };
  }, []);

  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center mb-12 animate-in fade-in-0 slide-in-from-top-10 duration-500">
        <div className="flex justify-center items-center gap-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Register for AI-GRID
          </h1>
        </div>
        <p className="mt-4 text-lg text-muted-foreground">
          Secure your place at the intersection of AI and energy.
        </p>
      </div>

      <div className="max-w-4xl mx-auto animate-in fade-in-0 slide-in-from-bottom-10 duration-500 delay-200">
        <Card className="overflow-hidden relative">
          <CardContent className="p-0">
            <div className="relative w-full">
              {/* Loading overlay */}
              {loading && !blocked && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/90 dark:bg-black/60">
                  <div className="flex flex-col items-center gap-3">
                    <svg
                      className="animate-spin h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <span className="text-sm text-muted-foreground">
                      Loading registration form...
                    </span>
                  </div>
                </div>
              )}

              {/* Keep the iframe exactly as before, but attach ref and onLoad */}
              {!blocked ? (
                <iframe
                  ref={iframeRef}
                  title="AI-GRID registration form"
                  src={registrationUrl}
                  width="100%"
                  height="100%"
                  frameBorder={0}
                  marginWidth={0}
                  marginHeight={0}
                  loading="lazy"
                  onLoad={() => {
                    setLoading(false);
                    // If onLoad fires, assume success (some cases it may still be blocked,
                    // but the probe above will catch that)
                    setBlocked(false);
                  }}
                  style={{ border: "none", minHeight: 600 }}
                  className="w-full h-[80vh] md:h-[75vh] lg:h-[80vh]"
                  aria-label="AI-GRID registration form embedded from Google Forms"
                  allowFullScreen
                >
                  Loading registration form...
                </iframe>
              ) : (
                // Minimal visual change: show the exact same sized container with a clear CTA
                <div className="w-full h-[80vh] md:h-[75vh] lg:h-[80vh] flex items-center justify-center border rounded bg-gray-50">
                  <div className="text-center max-w-lg px-6">
                    <p className="mb-4 text-lg font-medium">
                      The embedded form can't be displayed in this browser (blocked by framing
                      policy).
                    </p>
                    <p className="mb-6 text-sm text-muted-foreground">
                      Click the button below to open the registration form in a new tab.
                    </p>
                    <a
                      href={registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-md bg-primary text-white font-semibold shadow-sm hover:opacity-95"
                    >
                      Open registration form in a new tab
                    </a>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Prominent fallback CTA (kept; used when iframe blocked or users prefer new tab) */}
        <div className="text-center mt-6">
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-md bg-primary text-white font-semibold shadow-sm hover:opacity-95"
          >
            Open registration form in a new tab
          </a>
        </div>

        <Alert className="mt-6 bg-primary/5 border-primary/20">
          <Info className="h-4 w-4 text-primary" />
          <AlertTitle className="text-primary">Having trouble with the form?</AlertTitle>
          <AlertDescription>
            If the embedded form is blocked by framing policies (Google sometimes prevents embedding),
            the button above will open it directly. I intentionally left everything else unchanged.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
