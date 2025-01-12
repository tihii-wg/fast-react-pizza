import React from "react";

import Button from "../../ui/Button";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form className="text-right" method="PATCH">
      <Button type="primary">Make prioriry</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.id, data);
  return null;
}
