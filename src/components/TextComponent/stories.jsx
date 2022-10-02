import { TextComponent } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cupiditate dicta, iure alias, inventore modi itaque veritatis aperiam assumenda, officia amet dolorem enim repudiandae consectetur vitae aliquam dolore similique quos!`
  },
  argTypes: {
    children: { type: "string" }
  }
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args}></TextComponent>
    </div>
  );
};
