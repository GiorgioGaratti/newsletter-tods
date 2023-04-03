import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

type FayTemplateProps = {
  headingTitle: string,
  textContent: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ProvaTemplate = ({
  headingTitle = "early whit the morning",
  textContent = `Lavoro o divertimento? Produttori musicali o modelli? Notte
  fonda o prime luci dell 'alba? Per gli Audio ComingSoon il
  confine è labile. In una scena creativa vibrante la chiave è non
  lasciarsi definire da un solo ruolo o modello.`
}: FayTemplateProps) => {
  const previewText = `Tod's mail preview`


  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="font-sans bg-gray-50 ">
          <Container className="bg-white shadow-2xl " >
            <Section className=" text-center  bg-sky-500">
          <Text className="align-top text-white ">
            Spedizioni e resi gratuiti
          </Text>
          </Section>
              <Img
                className="mx-auto"
                src="https://images.todsgroup.com/FayTemplate/new2021/logo-top.jpg"
                alt="FayLogo"
                width="204"
              />
               <Img
               className="mx-auto"
            src="https://images.todsgroup.com/FayTemplate/new2021/logo-top-archive.png"
            alt="FayLogo2"
            width="204"
            
          />
          <Img
          className=" w-full"
            src="https://images.todsgroup.com/PE22/NA/202201-W4/main.gif"
            alt="FayGif"          
          />
          
            <Container className="  min-w-[600px] p-[10px]" style={{ backgroundImage: "url(https://i.imgur.com/2txAriJ.gif)", overflow: "hidden" }}>
            <Section className="text-center mb-10" >
              <Heading className="uppercase tracking-wide text-5xl text-black">
                {headingTitle.toUpperCase()}
              </Heading>
              <Heading as="h2" className="text-xl font-normal  text-black">
                {textContent}
              </Heading>
              <Button
                href="https://example.com"
                className="bg-blue-800 text-white px-20 py-3 text-base "
              >
                SCOPRI DI PIU
              </Button>
            </Section>
            <RowTemplate>
              <Column className="p-2">
                <Button
                  href="https://example.com"
                  className="bg-blue-800 text-white px-16 py-3 text-base"
                >
                  REGALI PER LEI
                </Button>

              </Column>
              <Column className="p-2">
                <Button
                  href="https://example.com"
                  className="bg-blue-800 text-white px-16 py-3 text-base "
                >
                  REGALI PER LEI
                </Button>
              </Column>
            </RowTemplate>
            <RowTemplate>
              <Column className="p-2">
                <Img
                  src={`https://images.todsgroup.com/PE22/NA/202201-W4/box1.jpg`}
                  width="280px"
                  alt="box1"
                />
              </Column>
              <Column className="p-2" >
                <Img
                  src={`https://images.todsgroup.com/PE22/NA/202201-W4/box2.gif`}
                  width="280px"
                  alt="box2"
                />
              </Column>
            </RowTemplate>
            <RowTemplate>
              <Column className="p-2">
                <Img
                  src={`https://images.todsgroup.com/AI22/NA/202112-W51-2/box1.jpg`}
                  width="280px"
                  alt="box1"
                />

              </Column>
              <Column className="p-2">
                <Img
                  src={`https://images.todsgroup.com/AI22/NA/202112-W51-2/box2.jpg`}
                  width="280px"
                  alt="box2"
                />
              </Column>
            </RowTemplate>
            <RowTemplate>
              <Column className="p-2">
                <Button
                  href="https://example.com"
                  className="bg-blue-800 text-white px-16 py-3 text-base float-right"
                >
                  REGALI PER LEI
                </Button>

              </Column >
              <Column className="p-2">
                <Button
                  href="https://example.com"
                  className="bg-blue-800 text-white px-16 py-3 text-base "
                >
                  REGALI PER LEI
                </Button>
              </Column>
            </RowTemplate>
            <Section className="my-2">
              <Img
                className="max-w-full m-auto"
                src={`https://images.todsgroup.com/AI22/NA/202110-W45/SLIDE700-W.gif`}
                alt="box1"
              />
            </Section>
            <Section>
              <Img
                className="m-auto"
                src={`https://emailtaco.com/1681181280000.gif`}
                alt="countdown"
              />
            </Section>



            </Container>

            
            <Container className="bg-white w-full">
            <div className="p-3"/>
            <Hr className="bg-[#162540] border-[#162540] m-0 h-px"/>
            <Section className="py-5">
              <Column>
                <Section className="h-[8.5rem] w-[11.25rem] bg-neutral-50 pt-5 pb-10">
                  <Link target="_blank" href="https://www.fay.com/it-it/customer-care/orders-and-shipping/?utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-Spedizioni&userId=%3C%=recipient.crmId%%3E">
                    <Img style={cardImage} src="https://images.todsgroup.com/FayTemplate/icons-footer/Free-shipping.png" alt="Fay" width="51" height="40" />
                  </Link>
                  <Link target="_blank" href="https://www.fay.com/it-it/customer-care/orders-and-shipping/?utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-Spedizioni&userId=%3C%=recipient.crmId%%3E">
                    <Text style={cardText}>
                      SPEDIZIONE GRATUITA
                    </Text>
                  </Link>
                </Section>
              </Column>
              <Column>
                <Section className="h-[8.5rem] w-[11.25rem] bg-neutral-50 pt-5 pb-5">
                    <Link target="_blank" href="https://www.fay.com/it-it/customer-care/right-of-withdrawal/?utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-ResoGratuito&userId=%3C%=recipient.crmId%%3E">
                      <Img style={cardImage} src="https://images.todsgroup.com/FayTemplate/icons-footer/Cambio-Reso-Online.png" alt="Fay" width="40" height="40" />
                    </Link>
                    <Link target="_blank" href="https://www.fay.com/it-it/customer-care/right-of-withdrawal/?utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-ResoGratuito&userId=%3C%=recipient.crmId%%3E">
                      <Text style={cardText}>
                        RESO E CAMBIO ONLINE GRATUITI
                      </Text>
                    </Link>
                </Section>
              </Column>
              <Column>
                <Section className="h-[8.5rem] w-[11.25rem] bg-neutral-50 pt-5 pb-10">
                    <Link target="_blank" href="https://www.fay.com/it-it/customer-care/payments/?utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-Pagamentisicuri&userId=%3C%=recipient.crmId%%3E">
                      <Img style={cardImage} src="https://images.todsgroup.com/FayTemplate/icons-footer/Pagamenti-sicuri.png" alt="Fay" width="40" height="40" />
                    </Link>
                    <Link target="_blank" href="https://www.fay.com/it-it/customer-care/payments/?utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-Pagamentisicuri&userId=%3C%=recipient.crmId%%3E">
                      <Text style={cardText}>
                        PAGAMENTI SICURI
                      </Text>
                    </Link>
                </Section>
              </Column>
              <Section className="pt-1 pb-[1.625rem] w-[18rem] px-[4.125rem]" align="center">
                <Column className="w-[2.313rem]" align="center">
                  <Section className="m-0 p-0" align="center">
                    <Link target="_blank" href="https://www.facebook.com/fay">
                      <Img className="m-0 inline p-0" alt="Facebook" src="https://images.todsgroup.com/FayTemplate/Social/Facebook.png" width="10px" height="20px" />
                    </Link>
                  </Section>
                </Column>
                <Column className="w-[2.438rem]" align="center">
                  <Section className="m-0 p-0" align="center">
                    <Link target="_blank" href="https://www.instagram.com/fay_brand/">
                      <Img className="m-0 inline p-0" alt="Instagram" src="https://images.todsgroup.com/FayTemplate/Social/Instagram.png" width="20px" height="20px" />
                    </Link>
                  </Section>              
                </Column>
                <Column className="w-[2.438rem]" align="center">
                  <Section className="m-0 p-0" align="center">
                    <Link target="_blank" href="https://www.pinterest.com/faybrand/">
                      <Img className="m-0 inline p-0" alt="Pinterest" src="https://images.todsgroup.com/FayTemplate/Social/Pinterest.png" width="16px" height="20px" />
                    </Link>
                  </Section>              
                </Column>
                <Column className="w-[2.563rem]" align="center">
                  <Section className="m-0 p-0" align="center">
                    <Link target="_blank" href="https://www.youtube.com/c/fay">
                      <Img className="m-0 inline p-0" alt="Youtube" src="https://images.todsgroup.com/FayTemplate/Social/Youtube.png" width="29px" height="20px" />
                    </Link>
                  </Section>              
                </Column>
              </Section>
            </Section>
          </Container>
          <Container>
            <Text style={addresstext} align="center">
              Questa email è stata inviata a ...
              <br/>
              Se non vuoi più ricevere comunicazioni da Fay, <Link className="no-underline text-[#162540]" href="https://www.fay.com/unsubscribe-page/?idLang=1040&id=%3C%=%20encryptedCrmIdSuffix%%3E&utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-Unsubscribe&userId=%3C%=recipient.crmId%%3E" target="_blank">
                clicca qui.</Link>
            <br/>
            <br/>
              Tod's S.p.a. Via Filippo Della Valle, 1, 63811 S. Elpidio a Mare (FM) Italy
            </Text>
          </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ProvaTemplate;


const RowTemplate = (props) => {
  return (
    <Row className=" w-fit mx-auto">
      {props.children.map((child) => {
        return child
      })}
    </Row>
  )
}

const cardText = {
  fontFamily: 'CircularStd-Book, Helvetica, Arial, sans-serif',
  fontSize: '0.875rem',
  lineHeight: '1.125rem',
  textAlign: "center",
  color: "#162540",
  margin: "0rem",
  width: "11.25rem",
  padding: "0rem"
}

const cardImage = {
  margin: "0rem auto 1.125rem",
  padding: "0rem"
}

const addresstext = {
  padding: 0,
  verticalAlign: "top",
  fontSize: "0.625rem",
  lineHeight: "0.875rem",
  color: "#162540"
}
