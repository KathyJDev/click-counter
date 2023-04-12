/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClickCreateFormInputValues = {
    count?: number;
    browserId?: string;
};
export declare type ClickCreateFormValidationValues = {
    count?: ValidationFunction<number>;
    browserId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClickCreateFormOverridesProps = {
    ClickCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    count?: PrimitiveOverrideProps<TextFieldProps>;
    browserId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClickCreateFormProps = React.PropsWithChildren<{
    overrides?: ClickCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClickCreateFormInputValues) => ClickCreateFormInputValues;
    onSuccess?: (fields: ClickCreateFormInputValues) => void;
    onError?: (fields: ClickCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClickCreateFormInputValues) => ClickCreateFormInputValues;
    onValidate?: ClickCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClickCreateForm(props: ClickCreateFormProps): React.ReactElement;
