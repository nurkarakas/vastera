import {
  Flex,
  Heading,
  SmartImage,
  Text,
  Button,
  Icon,
} from "@/once-ui/components";
import { getTranslations } from "next-intl/server";
import { work } from "@/app/resources/content";
import { notFound } from "next/navigation";

interface ProjectDetailProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug, locale } = params;
  const t = await getTranslations();

  // Projeyi bulma - slug ile title'ı karşılaştır
  const project = work.projects.find(
    (p) => p.title.toLowerCase().replace(/ /g, "-") === slug.toLowerCase()
  );

  if (!project) {
    notFound();
  }

  return (
    <Flex fillWidth maxWidth="m" direction="column" gap="l">
      <Flex fillWidth justifyContent="space-between" alignItems="center">
        <Button
          href={`/${locale}/work`}
          variant="tertiary"
          size="s"
          style={{
            fontSize: "12px",
          }}
          prefixIcon="chevronLeft"
        >
          Back To Projects
        </Button>
      </Flex>

      <Flex
        direction="column"
        gap="s"
        style={{
          borderRadius: "var(--radius-l)",
        }}
      >
        <Flex alignItems="center" gap="m">
          <Heading
            variant="display-strong-m"
            style={{
              margin: "auto",
              fontSize: "32px",
            }}
          >
            {project.title}
          </Heading>

          {project.icon && (
            <Flex
              alignItems="center"
              justifyContent="center"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
              }}
            >
              <Icon name={project.icon || "grid"} size="l" />
            </Flex>
          )}
        </Flex>

        <SmartImage
          src={project.image}
          alt={project.title}
          radius="m"
          aspectRatio="16 / 9"
          style={{
            borderRadius: "var(--radius-m)",
            backgroundColor: "transparent",
          }}
        />

        <Text variant="body-default-l">{project.description}</Text>

        {project.features && project.features.length > 0 && (
          <Flex direction="column" gap="m" marginTop="m">
            <Heading variant="heading-strong-m">Basic Features</Heading>
            <Flex gap="s" wrap={true}>
              {project.features.map((feature, index) => (
                <Flex
                  key={index}
                  padding="s"
                  alignItems="center"
                  gap="xs"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "var(--radius-m)",
                    maxWidth: "fit-content",
                  }}
                >
                  <Icon
                    name={typeof feature === "string" ? "check" : feature.icon}
                    style={{ color: "white" }}
                    size="xs"
                  />
                  <Text variant="body-default-s">
                    {typeof feature === "string" ? feature : feature.text}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        )}

        {(project.technicalDetails && (
          <Flex direction="column" gap="m" marginTop="l">
            <Heading variant="heading-strong-m">Technical Details</Heading>

            {project.technicalDetails.description && (
              <Text variant="body-default-m" marginBottom="m">
                {project.technicalDetails.description}
              </Text>
            )}

            <Flex gap="l" wrap={true}>
              {project.technicalDetails.technologies && (
                <Flex
                  direction="column"
                  gap="s"
                  flex={1}
                  style={{ minWidth: "200px" }}
                >
                  <Heading variant="heading-strong-s">
                    Used Technologies
                  </Heading>
                  <Text variant="body-default-s">
                    {project.technicalDetails.technologies.join(", ")}
                  </Text>
                </Flex>
              )}

              {project.technicalDetails.developmentProcess && (
                <Flex
                  direction="column"
                  gap="s"
                  flex={1}
                  style={{ minWidth: "200px" }}
                >
                  <Heading variant="heading-strong-s">
                    Development Process
                  </Heading>
                  <Text variant="body-default-s">
                    {project.technicalDetails.developmentProcess.join(", ")}
                  </Text>
                </Flex>
              )}
            </Flex>

            {(project.technicalDetails.cardTypes ||
              project.technicalDetails.propertyTypes ||
              project.technicalDetails.vehicleTypes ||
              project.technicalDetails.productCategories ||
              project.technicalDetails.serviceCategories ||
              project.technicalDetails.planTypes ||
              project.technicalDetails.houseTypes ||
              project.technicalDetails.tournamentTypes ||
              project.technicalDetails.moduleTypes) && (
              <Flex direction="column" gap="s" marginTop="m">
                <Heading variant="heading-strong-s">
                  {project.technicalDetails.cardTypes
                    ? "Card Types"
                    : project.technicalDetails.propertyTypes
                    ? "Property Types"
                    : project.technicalDetails.vehicleTypes
                    ? "Vehicle Types"
                    : project.technicalDetails.productCategories
                    ? "Product Categories"
                    : project.technicalDetails.serviceCategories
                    ? "Service Categories"
                    : project.technicalDetails.planTypes
                    ? "Plan Types"
                    : project.technicalDetails.houseTypes
                    ? "House Types"
                    : project.technicalDetails.moduleTypes
                    ? "Module Types"
                    : "Tournament Types"}
                </Heading>
                <Flex gap="s" wrap={true}>
                  {(
                    project.technicalDetails.cardTypes ||
                    project.technicalDetails.propertyTypes ||
                    project.technicalDetails.vehicleTypes ||
                    project.technicalDetails.productCategories ||
                    project.technicalDetails.serviceCategories ||
                    project.technicalDetails.planTypes ||
                    project.technicalDetails.houseTypes ||
                    project.technicalDetails.moduleTypes ||
                    project.technicalDetails.tournamentTypes
                  ).map((item, index) => (
                    <Flex
                      key={index}
                      padding="s"
                      alignItems="center"
                      gap="xs"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "var(--radius-m)",
                        maxWidth: "fit-content",
                      }}
                    >
                      <Icon
                        name={
                          project.technicalDetails.cardTypes
                            ? "creditCard"
                            : project.technicalDetails.propertyTypes
                            ? "home"
                            : project.technicalDetails.vehicleTypes
                            ? "car"
                            : project.technicalDetails.productCategories
                            ? "shoppingBag"
                            : project.technicalDetails.serviceCategories
                            ? "tool"
                            : project.technicalDetails.planTypes
                            ? "fileText"
                            : project.technicalDetails.houseTypes
                            ? "home"
                            : project.technicalDetails.moduleTypes
                            ? "layers"
                            : "trophy"
                        }
                        style={{ color: "white" }}
                        size="xs"
                      />
                      <Text variant="body-default-s">{item}</Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            )}

            {project.technicalDetails.features && (
              <Flex direction="column" gap="s" marginTop="m">
                <Heading variant="heading-strong-s">Features</Heading>
                <Flex gap="s" wrap={true}>
                  {project.technicalDetails.features.map((feature, index) => (
                    <Flex
                      key={index}
                      padding="s"
                      alignItems="center"
                      gap="xs"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "var(--radius-m)",
                        maxWidth: "fit-content",
                      }}
                    >
                      <Icon name="check" style={{ color: "white" }} size="xs" />
                      <Text variant="body-default-s">{feature}</Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            )}
          </Flex>
        )) || (
          <Flex direction="column" gap="m" marginTop="l">
            <Heading variant="heading-strong-m">Technical Details</Heading>
            <Flex gap="l" wrap={true}>
              <Flex
                direction="column"
                gap="s"
                flex={1}
                style={{ minWidth: "200px" }}
              >
                <Heading variant="heading-strong-s">Used Technologies</Heading>
                <Text variant="body-default-s">
                  React.js, Next.js, TailwindCSS, TypeScript
                </Text>
              </Flex>
              <Flex
                direction="column"
                gap="s"
                flex={1}
                style={{ minWidth: "200px" }}
              >
                <Heading variant="heading-strong-s">
                  Development Process
                </Heading>
                <Text variant="body-default-s">
                  UI/UX design, Frontend development, API integration, Test and
                  optimization
                </Text>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>

      <Flex fillWidth justifyContent="center" marginTop="l">
        <Button
          variant="secondary"
          size="m"
          href={
            project.title === "Alius Card"
              ? "https://demo.vasteradigital.com/alius-card/"
              : project.title === "UnoLife"
              ? "https://demo.vasteradigital.com/uno/"
              : project.title === "Brussels"
              ? "https://demo.vasteradigital.com/brussels/"
              : project.title === "Erol Bakır"
              ? "https://demo.vasteradigital.com/erol/"
              : project.title === "Hecotec"
              ? "https://demo.vasteradigital.com/hecotec-demo/"
              : project.title === "Chef"
              ? "https://demo.vasteradigital.com/chef/"
              : project.title === "KaliteliTakipçi"
              ? "https://demo.vasteradigital.com/kaliteli-takipci/"
              : project.title === "LocateMyWill"
              ? "https://demo.vasteradigital.com/locatemywill/"
              : "#"
          }
          target="_blank"
        >
          View Project
        </Button>
      </Flex>
    </Flex>
  );
}

// Statik olarak mümkün olan tüm parametreleri oluştur
export async function generateStaticParams() {
  return work.projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/ /g, "-"),
  }));
}
