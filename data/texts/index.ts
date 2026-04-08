import type { TextEntry } from "@/data/types";
import theDictatorsHandbook from "./the-dictators-handbook";
import whyNationsFail from "./why-nations-fail";
import theLogicOfPoliticalSurvival from "./the-logic-of-political-survival";
import rationalistExplanationsForWar from "./rationalist-explanations-for-war";
import powerAndProsperity from "./power-and-prosperity";
import stateBuilding from "./state-building";
import politicalOrderAndPoliticalDecay from "./political-order-and-political-decay";
import embeddedAutonomy from "./embedded-autonomy";
import buildingStateCapability from "./building-state-capability";
import mitiAndTheJapaneseMiracle from "./miti-and-the-japanese-miracle";
import oneEconomicsManyRecipes from "./one-economics-many-recipes";
import politicalMan from "./political-man";
import economicOriginsOfDictatorshipAndDemocracy from "./economic-origins-of-dictatorship-and-democracy";
import transitionsFromAuthoritarianRule from "./transitions-from-authoritarian-rule";
import competitiveAuthoritarianism from "./competitive-authoritarianism";
import politicalOrderInChangingSocieties from "./political-order-in-changing-societies";
import socialOriginsOfDictatorshipAndDemocracy from "./social-origins-of-dictatorship-and-democracy";
import horizontalInequalitiesAndConflict from "./horizontal-inequalities-and-conflict";
import rebelocracy from "./rebelocracy";
import insideRebellion from "./inside-rebellion";
import theLogicOfViolenceInCivilWar from "./the-logic-of-violence-in-civil-war";

const texts: Record<string, TextEntry> = {
  "the-dictators-handbook": theDictatorsHandbook,
  "why-nations-fail": whyNationsFail,
  "the-logic-of-political-survival": theLogicOfPoliticalSurvival,
  "rationalist-explanations-for-war": rationalistExplanationsForWar,
  "power-and-prosperity": powerAndProsperity,
  "state-building": stateBuilding,
  "political-order-and-political-decay": politicalOrderAndPoliticalDecay,
  "embedded-autonomy": embeddedAutonomy,
  "building-state-capability": buildingStateCapability,
  "miti-and-the-japanese-miracle": mitiAndTheJapaneseMiracle,
  "one-economics-many-recipes": oneEconomicsManyRecipes,
  "political-man": politicalMan,
  "economic-origins-of-dictatorship-and-democracy": economicOriginsOfDictatorshipAndDemocracy,
  "transitions-from-authoritarian-rule": transitionsFromAuthoritarianRule,
  "competitive-authoritarianism": competitiveAuthoritarianism,
  "political-order-in-changing-societies": politicalOrderInChangingSocieties,
  "social-origins-of-dictatorship-and-democracy": socialOriginsOfDictatorshipAndDemocracy,
  "horizontal-inequalities-and-conflict": horizontalInequalitiesAndConflict,
  "rebelocracy": rebelocracy,
  "inside-rebellion": insideRebellion,
  "the-logic-of-violence-in-civil-war": theLogicOfViolenceInCivilWar,
};

export default texts;

export function getText(slug: string): TextEntry | undefined {
  return texts[slug];
}

export function getAllTexts(): TextEntry[] {
  return Object.values(texts);
}
