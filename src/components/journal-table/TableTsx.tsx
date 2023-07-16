import Datatable from "./Datatable";

//  function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//   ];
// }

export default function TableTsx() {
  //   const data = await getData();

  return (
    <div className="py-8">
      <Datatable />
    </div>
  );
}
