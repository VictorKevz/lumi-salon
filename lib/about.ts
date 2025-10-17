import { Diversity1, PeopleAlt, WorkspacePremium } from "@mui/icons-material";
import { Messages, MuiIcon } from "./header";

export interface AboutValue {
  id: string;
  title: string;
  description: string;
  icon: MuiIcon;
}

export function getAboutValues(messages: Messages): AboutValue[] {
  return [
    {
      id: "quality",
      title: messages["about.value.quality.title"],
      description: messages["about.value.quality.desc"],
      icon: WorkspacePremium,
    },
    {
      id: "care",
      title: messages["about.value.care.title"],
      description: messages["about.value.care.desc"],
      icon: Diversity1,
    },
    {
      id: "experience",
      title: messages["about.value.experience.title"],
      description: messages["about.value.experience.desc"],
      icon: PeopleAlt,
    },
  ];
}
