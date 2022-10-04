import { SectionContainer } from ".";

export default {
  title: "SectionContaiener",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eius
          eligendi id maiores, excepturi cum, quae molestias inventore facere
          veritatis odit libero cupiditate numquam quod sed et? Modi, laborum
          harum.
        </p>
      </div>
    )
  },
  argTypes: {
    children: { type: "" }
  }
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args}></SectionContainer>
    </div>
  );
};
