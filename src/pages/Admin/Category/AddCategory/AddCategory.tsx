import {
  AddCategoryMutationVariables,
  useAddCategoryMutation,
} from "../../../../utils/__generated__/graphql";
import { useForm } from "react-hook-form";

export function AddCategory() {
  const [addCategory] = useAddCategoryMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCategoryMutationVariables>();

  return (
    <form
      onSubmit={handleSubmit((variables) =>
        addCategory({
          variables,
        }),
      )}
      className="flex flex-col space-y-4"
    >
      <input {...register("key")} placeholder="key" />
      {errors?.key && <p>{errors.key.message}</p>}

      <textarea {...register("description")} placeholder="Description" />
      {errors?.description && <p>{errors.description.message}</p>}

      <input {...register("title")} placeholder="Title" />
      {errors?.title && <p>{errors.title.message}</p>}

      <input type="submit" />
    </form>
  );
}
