import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { scheduleData } from "@/lib/data";
import { cn } from "@/lib/utils";

const dayTabs = [
  { value: "day1", label: "Jan 6", data: scheduleData.day1 },
  { value: "day2", label: "Jan 7", data: scheduleData.day2 },
  { value: "day3", label: "Jan 8", data: scheduleData.day3 },
];

export default function SchedulePage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center mb-12 animate-in fade-in-0 slide-in-from-top-10 duration-500">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Event Schedule
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Plan your days at AI-GRID.
        </p>
      </div>

      <div className="animate-in fade-in-0 slide-in-from-bottom-10 duration-500 delay-200">
        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-xs sm:max-w-md mx-auto h-auto">
            {dayTabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="py-2.5 text-xs sm:text-sm">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {dayTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <Card className="mt-8">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[120px] sm:w-[150px]">Time</TableHead>
                          <TableHead>Topic</TableHead>
                          <TableHead className="hidden md:table-cell">Speaker</TableHead>
                          <TableHead className="text-right">Mode</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tab.data.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{item.time}</TableCell>
                            <TableCell>
                              {item.topic}
                              <div className="text-muted-foreground md:hidden text-sm mt-1">{item.speaker}</div>
                            </TableCell>
                            <TableCell className="text-muted-foreground hidden md:table-cell">{item.speaker}</TableCell>
                            <TableCell className="text-right">
                              <Badge variant={
                                item.mode === "Hybrid" ? "default"
                                : item.mode === "Online" ? "secondary"
                                : "outline"
                              } className={cn(
                                  'text-xs',
                                  item.mode === 'Hybrid' && 'bg-primary/80',
                                  item.mode === 'Online' && 'bg-blue-500'
                              )}>
                                {item.mode}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
