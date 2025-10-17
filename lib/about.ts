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

export interface AboutStat {
  id: string;
  label: string;
  value: string;
}

export function getAboutStats(messages: Messages): AboutStat[] {
  return [
    {
      id: "quality",
      label: messages["about.stats.clients.label"],
      value: messages["about.stats.clients.value"],
    },
    {
      id: "care",
      label: messages["about.stats.awards.label"],
      value: messages["about.stats.awards.value"],
    },
    {
      id: "experience",
      label: messages["about.stats.years.label"],
      value: messages["about.stats.years.value"],
    },
  ];
}
