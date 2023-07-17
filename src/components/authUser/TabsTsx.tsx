import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

interface Data {
  id: string;
  entryPrice: number;
}

interface Props {
  data: Data[];
}

export function TabsTsx({ data }: Props) {
  console.log(data);

  return (
    <Tabs defaultValue="account" className="w-[400px">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">table</TabsTrigger>
        <TabsTrigger value="password">row</TabsTrigger>
      </TabsList>
      <TabsContent value="account">account</TabsContent>
      <TabsContent value="password">
        <div className="grid w-full grid-cols-4">
          {data &&
            data.map(({ id, entryPrice }) => (
              <div className="h-[10rem] border" key={id}>
                {entryPrice}
              </div>
            ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
