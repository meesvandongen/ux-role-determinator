import { QuestionnaireLayout } from "../../components/QuestionnaireLayout/QuestionnaireLayout";
import { useCategoryQuery } from "../../utils/__generated__/graphql";
import { useParams } from "react-router-dom";

export default function Category(): JSX.Element {
  const { id } = useParams();

  const { data, loading } = useCategoryQuery({
    variables: {
      id,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data?.categories_by_pk) {
    return <div>Something went wrong</div>;
  }

  return (
    <QuestionnaireLayout
      title={data.categories_by_pk.title}
      description={data.categories_by_pk.description}
      questions={<></>}
      three={"placeholder"}
    />
  );
}
