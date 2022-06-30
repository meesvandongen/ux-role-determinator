import React from "react";
import { Graphics } from "./Graphics";
import { Icon } from "./icon/Icon";
import { Prototyping } from "./Prototyping";
import { UiTheory } from "./UiTheory";
import { UserInterface } from "./UserInterface";
import { QuestionPageLayout } from "../components/QuestionPageLayout";

export function InteractionDesigner(): JSX.Element {
  return (
    <QuestionPageLayout
      title={<h1>Visual and Interaction Designer</h1>}
      description={
        <p>
          De visual/interaction designer richt zich op het creëren van diensten
          en producten die bruikbaar, nuttig en betekenisvol zijn voor
          gebruikers. In deze rol bevind je je op het snijvlak van ontwerp,
          interactie en user interface design. Je bent dus niet alleen bezig met
          de interface tussen mens en device, maar ook met de emotie van de
          gebruiker en de daarbij behorende vormgeving van de
          gebruikerservaring.
        </p>
      }
      questions={
        <>
          <Prototyping />
          <Graphics />
          <UserInterface />
          <UiTheory />
        </>
      }
      three={<Icon />}
    />
  );
}
