/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Click } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame10OverridesProps = {
    "0"?: PrimitiveOverrideProps<TextProps>;
    Frame10?: PrimitiveOverrideProps<FlexProps>;
    "Group 1"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<IconProps>;
    "+"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame10Props = React.PropsWithChildren<Partial<FlexProps> & {
    click?: Click;
} & {
    overrides?: Frame10OverridesProps | undefined | null;
}>;
export default function Frame10(props: Frame10Props): React.ReactElement;
