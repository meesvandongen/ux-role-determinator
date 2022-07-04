import React from "react";
import { Graphics } from "./Graphics";
import { Icon } from "./icon/Icon";
import { Prototyping } from "./Prototyping";
import { UiTheory } from "./UiTheory";
import { UserInterface } from "./UserInterface";
import { QuestionPageLayout } from "../components/QuestionPageLayout";

export function UxDesign(): JSX.Element {
  return (
    <QuestionPageLayout
      title={<h1>Visual / interface design</h1>}
      description={
        <>
          <p>
            Een UX Designer is een expert in user-centred design, doordat
            hij/zij, mede door het werk van de UX researcher, doelen en context
            van de gebruikers begrijpt. Hij/zij is daardoor in staat interacties
            te ontwerpen die gebruikers helpen om het product gemakkelijk te
            ontdekken, te gebruiken en ervan te genieten.
          </p>
          <p>
            Daarnaast zijn UX Designers conceptdenkers en vindingrijk. Zowel
            merkwaarden, -uitingen en wensen vanuit een organisatie, als de
            behoeftes van de eindgebruiker neemt een UX Designer mee in het
            ontwerp. Hij/zij is gericht op het juist toepassen van fotografie,
            afbeeldingen kleuren, ruimte, lay-outs, typografie en vormen, om de
            gebruiksvriendelijkheid en de gebruikerservaring te verbeteren.
          </p>
        </>
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
