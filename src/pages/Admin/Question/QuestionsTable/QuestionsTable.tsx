import {
  QuestionsTableQuery,
  useQuestionsTableQuery,
} from "../../../../utils/__generated__/graphql";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

export function QuestionsTableWrapper(): JSX.Element {
  const { data, loading } = useQuestionsTableQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data?.questions) {
    return <div>Something went wrong</div>;
  }

  return <QuestionsTable questions={data.questions} />;
}

type Column = QuestionsTableQuery["questions"][number];

const columnHelper = createColumnHelper<Column>();

const columns = [
  columnHelper.accessor("description_interest", {
    header: () => <span>Interest</span>,
  }),
  columnHelper.accessor("description_knowledge", {
    header: () => <span>Knowledge</span>,
  }),
  columnHelper.accessor("title", {
    header: () => <span>Title</span>,
  }),
  columnHelper.accessor("order", {
    header: () => <span>Order</span>,
  }),
  columnHelper.accessor("category.key", {
    header: () => <span>Category</span>,
  }),
];

interface CategoriesTableProps {
  questions: Column[];
}

export function QuestionsTable({
  questions: categories,
}: CategoriesTableProps) {
  // TODO: move useQuery hook into this component when apollo has support for
  // Suspense. See https://github.com/apollographql/apollo-client/issues/10231
  const table = useReactTable({
    data: categories,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
