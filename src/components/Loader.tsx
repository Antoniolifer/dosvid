import { MoonLoader } from "react-spinners"

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  marginTop: '100px'
};

export default function Loader() {
  return (
    <span className="mx-auto block w-full">    <MoonLoader color={'#6a994e'} size={150}         cssOverride={override}
/>
</span>
  )
}