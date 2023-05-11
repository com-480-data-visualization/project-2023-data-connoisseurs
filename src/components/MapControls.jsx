import * as React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export function MapControls() {
  return (
    <div className="position-absolute start-0 top-0 z-50">
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button isActive>Votes In</Button>
        <Button>Votes Out</Button>
      </ButtonGroup>
    </div>
  );
}
