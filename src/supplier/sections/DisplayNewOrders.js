import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Errors from "../components/Errors";
import useFetchNewOrder from "../hooks/useFetchNewOrder";
import OrdersTable from "../tables/OrdersTable";
import CustomPagination from "../components/CustomPagination";
import CustomSwitch from "../components/CustomSwitch";

export default function DisplayNewOrder() {
    const [page, setPage] = useState(0);
    const [showOldest, setShowOldest] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const { err, loading, result=[] } = useFetchNewOrder({
      page_number: page,
      order: showOldest ? "asc" : "desc",
    });

    useEffect(() => {
      if (result.length < 10) return setHasMore(false);
      setHasMore(true);
    }, [result]);

    useEffect(() => {
      setPage(0);
    }, [showOldest]);

    function Display() {
      if (loading) return <Loading loading={loading} />;
      if (err) return <Errors errors={[err]} />;
      return <OrdersTable ordered_items={result} />;
    }
    return (
      <>
        <CustomPagination setPage={setPage} hasMore={hasMore} page={page} />
        <CustomSwitch
          label="Show Oldest"
          checked={showOldest}
          onChange={(e) => {
            setShowOldest((show) => !show);
          }}
        />
        <Display />
      </>
    );
  }
