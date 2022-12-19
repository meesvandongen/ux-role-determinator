import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  CategoriesTableQuery,
  useAddCategoryMutation,
  useCategoriesTableQuery,
} from "../../../../utils/__generated__/graphql";

export function CategoriesTableWrapper(): JSX.Element {
  const { data, loading } = useCategoriesTableQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data?.categories) {
    return <div>Something went wrong</div>;
  }

  return <CategoriesTable categories={data.categories} />;
}

type Column = CategoriesTableQuery["categories"][number];

const columnHelper = createColumnHelper<Column>();

const columns = [
  columnHelper.accessor("title", {
    header: () => <span>Title</span>,
  }),
];

interface CategoriesTableProps {
  categories: Column[];
}

export function CategoriesTable({ categories }: CategoriesTableProps) {
  // TODO: move useQuery hook into this component when apollo has support for
  // Suspense. See https://github.com/apollographql/apollo-client/issues/10231
  const table = useReactTable({
    data: categories,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [addCategory] = useAddCategoryMutation();

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
