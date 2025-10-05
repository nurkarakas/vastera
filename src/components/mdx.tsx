import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ReactNode } from "react";

import { SmartImage, SmartLink, Text } from "@/once-ui/components";
import { CodeBlock } from "@/once-ui/modules";
import { HeadingLink } from "@/components";

import { TextProps } from "@/once-ui/interfaces";
import { SmartImageProps } from "@/once-ui/components/SmartImage";

type TableProps = {
  data: {
    headers: string[];
    rows: string[][];
  };
};

function Table({ data }: TableProps) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <SmartLink href={href} {...props}>
        {children}
      </SmartLink>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function createImage({
  alt,
  src,
  ...props
}: SmartImageProps & { src: string }) {
  if (!src) {
    console.error("SmartImage requires a valid 'src' property.");
    return null;
  }

  return (
    <SmartImage
      className="my-20"
      enlarge
      radius="m"
      aspectRatio="16 / 9"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const CustomHeading = ({ children, ...props }: TextProps) => {
    const slug = slugify(children as string);
    return (
      <HeadingLink
        style={{
          marginTop: "var(--static-space-24)",
          marginBottom: "var(--static-space-12)",
        }}
        level={level}
        id={slug}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  };

  CustomHeading.displayName = `Heading${level}`;

  return CustomHeading;
}

function createParagraph({ children }: TextProps) {
  return (
    <Text
      style={{ lineHeight: "150%" }}
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="12"
    >
      {children}
    </Text>
  );
}

// Yeni özel kod bileşeni
function CustomCode({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  // Eğer bir kod bloğuysa (language-* sınıfı varsa)
  if (className && className.startsWith("language-")) {
    const language = className.replace("language-", "");

    // Güvenli kod dönüşümü
    const safeCode =
      typeof children === "string"
        ? children
        : React.Children.toArray(children)
            .map((child) => {
              // Null veya undefined kontrolü
              if (child === null || child === undefined) return "";

              // ReactNode'u stringe dönüştür
              return typeof child === "string"
                ? child
                : React.isValidElement(child)
                ? child.props.children
                : String(child);
            })
            .filter(Boolean) // Boş stringleri filtrele
            .join("\n");

    return (
      <CodeBlock
        codeInstances={[
          {
            code: safeCode,
            language: language,
            label: language,
          },
        ]}
        copyButton={true}
      />
    );
  }

  // Inline kod için stil
  return (
    <code
      className={className}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.05)", // Biraz daha açık bir arka plan
        color: "#d14",
        fontFamily:
          "'Fira Code', 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'Courier New', monospace",
        fontSize: "0.85em",
        padding: "2px 4px",
        borderRadius: "4px",
        margin: "0 2px",
        border: "1px solid rgba(0, 0, 0, 0.1)", // İnce bir kenarlık ekledik
      }}
    >
      {children}
    </code>
  );
}

const components = {
  p: createParagraph as any,
  h1: createHeading(1) as any,
  h2: createHeading(2) as any,
  h3: createHeading(3) as any,
  h4: createHeading(4) as any,
  h5: createHeading(5) as any,
  h6: createHeading(6) as any,
  img: createImage as any,
  a: CustomLink as any,
  Table,
  CodeBlock,
  code: CustomCode as any, // Yeni kod bileşenini ekledik
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    // @ts-ignore: Suppressing type error for MDXRemote usage
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
