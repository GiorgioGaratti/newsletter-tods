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



type FayTemplateProps = {
    headingTitle: string,
    textContent: string
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

export const TemplateFay = ({
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
                <Body className="font-sans bg-gray-300 ">
                    <Container className="bg-white shadow-2xl " >
                        <Section className=" text-center  bg-[#162540]">
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

                        <Container className="  min-w-[600px] p-[10px]" style={{ backgroundImage: "url(https://i.imgur.com/2txAriJ.gif)", overflow: "hidden", zIndex:9999 }}>
                            <Section className="text-center mb-10" >
                                <Heading className="uppercase text-5xl text-black font-extrabold tracking-wide">
                                    {headingTitle.toUpperCase()}
                                </Heading>
                                <Heading as="h2" className="text-xl font-normal  text-black">
                                    {textContent}
                                </Heading>
                                <Button
                                    href="https://example.com"
                                    className="bg-[#162540] text-white px-20 py-3 text-base "
                                >
                                    SCOPRI DI PIU
                                </Button>
                            </Section>
                            <RowTemplate>
                                <Column className="p-2">
                                    <Button
                                        href="https://example.com"
                                        className="bg-[#162540] text-white px-16 py-3 text-base"
                                    >
                                        REGALI PER LEI
                                    </Button>

                                </Column>
                                <Column className="p-2">
                                    <Button
                                        href="https://example.com"
                                        className="bg-[#162540] text-white px-16 py-3 text-base "
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
                                        className="bg-[#162540] text-white px-16 py-3 text-base float-right"
                                    >
                                        REGALI PER LEI
                                    </Button>

                                </Column >
                                <Column className="p-2">
                                    <Button
                                        href="https://example.com"
                                        className="bg-[#162540]  text-white px-16 py-3 text-base "
                                    >
                                        REGALI PER LEI
                                    </Button>
                                </Column>
                            </RowTemplate>
                        </Container>
                        <Section className="my-2">
                            <Img
                                className="max-w-full m-auto"
                                src={`https://images.todsgroup.com/AI22/NA/202110-W45/SLIDE700-W.gif`}
                                alt="box1"
                            />
                        </Section>
                        <Section className="mt-4">
                            <Img
                                className="m-auto"
                                src={`https://gifcdn.com/d9o6gpjeb9h70s34cpg.gif`}
                                alt="countdown"
                            />
                        </Section>

                        <Hr className="bg-[#162540] border-[#162540]  h-px mb-[25px]" />

                        <Row className="text-center">
                            <Column>
                                <Link target="_blank" href="https://www.fay.com/it-it/customer-care/orders-and-shipping/?utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-Spedizioni&userId=%3C%=recipient.crmId%%3E">
                                    <Img src="https://images.todsgroup.com/FayTemplate/icons-footer/Free-shipping.png" alt="Fay" width="51" height="40" className="mx-auto" />
                                </Link>
                                <Link target="_blank" href="https://www.fay.com/it-it/customer-care/orders-and-shipping/?utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-Spedizioni&userId=%3C%=recipient.crmId%%3E">
                                    <Text className="text-[#162540]" >
                                        SPEDIZIONE GRATUITA
                                    </Text>
                                </Link>
                            </Column>
                            <Column>
                                <Link target="_blank" href="https://www.fay.com/it-it/customer-care/right-of-withdrawal/?utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-ResoGratuito&userId=%3C%=recipient.crmId%%3E">
                                    <Img src="https://images.todsgroup.com/FayTemplate/icons-footer/Cambio-Reso-Online.png" alt="Fay" width="40" height="40" className="mx-auto" />
                                </Link>
                                <Link target="_blank" href="https://www.fay.com/it-it/customer-care/right-of-withdrawal/?utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-ResoGratuito&userId=%3C%=recipient.crmId%%3E">
                                    <Text className="text-[#162540]" >
                                        RESO E CAMBIO ONLINE GRATUITI
                                    </Text>

                                </Link>
                            </Column>
                            <Column>
                                <Link target="_blank" href="https://www.fay.com/it-it/customer-care/payments/?utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-Pagamentisicuri&userId=%3C%=recipient.crmId%%3E">
                                    <Img src="https://images.todsgroup.com/FayTemplate/icons-footer/Pagamenti-sicuri.png" alt="Fay" width="40" height="40" className="mx-auto" />
                                </Link>
                                <Link target="_blank" href="https://www.fay.com/it-it/customer-care/payments/?utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-Pagamentisicuri&userId=%3C%=recipient.crmId%%3E">
                                    <Text  className="text-[#162540]">
                                        PAGAMENTI SICURI
                                    </Text>
                                </Link></Column>
                        </Row>

                        <Row className="text-center w-fit mx-auto py-6">
                            <Column className="w-[2.313rem]">
                                <Link target="_blank" href="https://www.facebook.com/fay">
                                    <Img className="m-0 inline p-0" alt="Facebook" src="https://images.todsgroup.com/FayTemplate/Social/Facebook.png" width="10px" height="20px" />
                                </Link>
                            </Column >
                            <Column className="w-[2.313rem]">
                                <Link target="_blank" href="https://www.instagram.com/fay_brand/">
                                    <Img className="m-0 inline p-0" alt="Instagram" src="https://images.todsgroup.com/FayTemplate/Social/Instagram.png" width="20px" height="20px" />
                                </Link>
                            </Column>
                            <Column className="w-[2.313rem]">
                                <Link target="_blank" href="https://www.pinterest.com/faybrand/">
                                    <Img className="m-0 inline p-0" alt="Pinterest" src="https://images.todsgroup.com/FayTemplate/Social/Pinterest.png" width="16px" height="20px" />
                                </Link>
                            </Column>
                            <Column className="w-[2.313rem]">
                                <Link target="_blank" href="https://www.youtube.com/c/fay">
                                    <Img className="m-0 inline p-0" alt="Youtube" src="https://images.todsgroup.com/FayTemplate/Social/Youtube.png" width="29px" height="20px" />
                                </Link>
                            </Column>
                        </Row>

                        <Section>
                            <Text className="text-center text-[#162540] leading-[0.875rem] text-[0.625rem]">
                                Questa email è stata inviata a ...
                                <br />
                                Se non vuoi più ricevere comunicazioni da Fay, <Link className="no-underline text-[#162540]" href="https://www.fay.com/unsubscribe-page/?idLang=1040&id=%3C%=%20encryptedCrmIdSuffix%%3E&utm_source=newsletter&utm_medium=email&utm_campaign=%3C%=%20message.delivery.operation.label%20%%3E&utm_content=OP-%3C%=%20message.delivery.operation.internalName%20%%3E%3CRI-%3C%=%20recipient.country_recipient.isoCode%20%%3E%3CDC-%3C%=%20message.delivery.deliveryCode%20%%3E%3CDG-%3C%=%20recipient.gender%20%%3E%3CCC-%3C%=%20message.delivery.operation.campaignCalendario%20%%3E%3CCN-%3C%=%20message.delivery.operation.campaignNature%20%%3E%3Ccontent-Unsubscribe&userId=%3C%=recipient.crmId%%3E" target="_blank">
                                    clicca qui.</Link>
                                <br />
                                <br />
                                Tod's S.p.a. Via Filippo Della Valle, 1, 63811 S. Elpidio a Mare (FM) Italy
                            </Text>
                        </Section>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default TemplateFay;


const RowTemplate = (props) => {
    return (
        <Row className="w-fit mx-auto">
            {props.children.map((child) => {
                return child
            })}
        </Row>
    )
}


