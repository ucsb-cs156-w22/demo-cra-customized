import BasicLayout from "main/layouts/BasicLayout";

export default function CerealPage({name}) {
  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>Cereal: { name } </h1>
        <p>
          If we added another prop for the text about the cereal, we could customize this part.
        </p>
      </div>
    </BasicLayout>
  )
}