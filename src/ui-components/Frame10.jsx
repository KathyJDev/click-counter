/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Click } from "../models";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function Frame10(props) {
  const { click, overrides, ...rest } = props;
  const groupOneOnClick = useDataStoreUpdateAction({
    fields: {},
    id: click?.count,
    model: Click,
    schema: schema,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="184px 317px 184px 317px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Frame10")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="200px"
        fontWeight="400"
        color="rgba(22,29,52,1)"
        lineHeight="242.0454559326172px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="121px"
        height="257px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={click?.count}
        {...getOverrideProps(overrides, "0")}
      ></Text>
      <Flex
        padding="0px 0px 0px 0px"
        width="183px"
        height="183px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        onClick={() => {
          groupOneOnClick();
        }}
        {...getOverrideProps(overrides, "Group 1")}
      >
        <Icon
          width="183px"
          height="183px"
          viewBox={{ minX: 0, minY: 0, width: 183, height: 183 }}
          paths={[
            {
              d: "M0 28C0 12.536 12.536 0 28 0L155 0C170.464 0 183 12.536 183 28L183 155C183 170.464 170.464 183 155 183L28 183C12.536 183 0 170.464 0 155L0 28Z",
              fill: "rgba(79,84,108,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="100px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="121.0227279663086px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="31px"
          left="59px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="+"
          {...getOverrideProps(overrides, "+")}
        ></Text>
      </Flex>
    </Flex>
  );
}
