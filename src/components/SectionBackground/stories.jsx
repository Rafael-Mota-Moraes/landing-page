import { SectionBackground } from ".";
import { SectionContainer } from "../SectionContainer";

export default {
  title: "SectionBackground",
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <div>
          <h1>Section Container</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            eius eligendi id maiores, excepturi cum, quae molestias inventore
            facere veritatis odit libero cupiditate numquam quod sed et? Modi,
            laborum harum.
          </p>
        </div>
      </SectionContainer>
    )
  },
  argTypes: {
    children: { type: "" }
  }
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args}></SectionBackground>
    </div>
  );
};
