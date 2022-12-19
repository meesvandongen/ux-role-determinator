import {
  UpdateQuestionMutationVariables,
  useUpdateQuestionMutation,
} from "../../../../utils/__generated__/graphql";
import { useForm } from "react-hook-form";

export function UpdateQuestion() {
  const [updateQuestion] = useUpdateQuestionMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateQuestionMutationVariables>();

  return (
    <form
      onSubmit={handleSubmit((variables) =>
        updateQuestion({
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
