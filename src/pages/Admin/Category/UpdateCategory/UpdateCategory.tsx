import {
  AddCategoryMutationVariables,
  useUpdateCategoryMutation,
} from "../../../../utils/__generated__/graphql";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export function Updateategory() {
  const { id } = useParams<{ id: string }>();

  const [updateCategory] = useUpdateCategoryMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCategoryMutationVariables>();

  return (
    <form
      onSubmit={handleSubmit((variables) =>
        updateCategory({
          variables: {
            ...variables,
            id,
          },
        }),
      )}
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
