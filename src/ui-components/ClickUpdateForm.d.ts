/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Click } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClickUpdateFormInputValues = {
    count?: number;
    browserId?: string;
};
export declare type ClickUpdateFormValidationValues = {
    count?: ValidationFunction<number>;
    browserId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClickUpdateFormOverridesProps = {
    ClickUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    count?: PrimitiveOverrideProps<TextFieldProps>;
    browserId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClickUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClickUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    click?: Click;
    onSubmit?: (fields: ClickUpdateFormInputValues) => ClickUpdateFormInputValues;
    onSuccess?: (fields: ClickUpdateFormInputValues) => void;
    onError?: (fields: ClickUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClickUpdateFormInputValues) => ClickUpdateFormInputValues;
    onValidate?: ClickUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClickUpdateForm(props: ClickUpdateFormProps): React.ReactElement;
