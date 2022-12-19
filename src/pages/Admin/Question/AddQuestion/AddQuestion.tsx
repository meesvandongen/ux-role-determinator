import {
  AddQuestionMutationVariables,
  useAddQuestionMutation,
} from "../../../../utils/__generated__/graphql";
import { useForm } from "react-hook-form";

export function AddQuestion() {
  const [addQuestion] = useAddQuestionMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddQuestionMutationVariables>();

  return (
    <form
      onSubmit={handleSubmit((variables) =>
        addQuestion({
          variables,
        }),
      )}
    >
      <input {...register("title")} placeholder="title" />
      {errors?.title && <p>{errors.title.message}</p>}

      <textarea
        {...register("description_interest")}
        placeholder="Description Interest"
      />
      {errors?.description_interest && (
        <p>{errors.description_interest.message}</p>
      )}

      <input
        {...register("description_knowledge")}
        placeholder="Description Knowledge"
      />
      {errors?.description_knowledge && (
        <p>{errors.description_knowledge.message}</p>
      )}

      <input
        {...register("order", { valueAsNumber: true })}
        placeholder="Order"
        type={"number"}
      />
      {errors?.order && <p>{errors.order.message}</p>}

      <input type="submit" />
    </form>
  );
}
