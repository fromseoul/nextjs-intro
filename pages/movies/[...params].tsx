import { useRouter } from "next/router";
import Seo from "../../components/Seo";

type Props = {
  params: any;
};

export default function Detail({ params }: Props) {
  const router = useRouter();

  const [title, id] = params.params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title || "loading..."}</h4>
    </div>
  );
}

export async function getServerSideProps({ params }: Props) {
  console.log(params);
  return {
    props: {
      params,
    },
  };
}
