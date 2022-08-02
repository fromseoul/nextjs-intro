import { useRouter } from "next/router";
import Seo from "../../components/Seo";

type Props = {
  params: any;
};

export default function Detail({ params }: Props) {
  const router = useRouter();

  // @ts-ignore
  const [title, id] = params.params || [];
  // console.log(aaa);

  return (
    <div>
      {/* eslint-disable-next-line react/jsx-no-undef */}
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
