import Card from "./UI/Card";
import ListCard from "./UI/ListCard";

const ConceptBlock = (props) => {
  const concepts = props.concepts;
  return (
    <Card>
      <ListCard
        image={concepts[0].image}
        title={concepts[0].title}
        description={concepts[0].description}
      />

      <ListCard
        image={concepts[1].image}
        title={concepts[1].title}
        description={concepts[1].description}
      />

      <ListCard
        image={concepts[2].image}
        title={concepts[2].title}
        description={concepts[2].description}
      />
    </Card>
  );
};

export default ConceptBlock;
