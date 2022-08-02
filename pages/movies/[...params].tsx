import { useRouter } from "next/router";

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
