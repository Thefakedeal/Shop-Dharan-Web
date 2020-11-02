import React, { useState, useEffect } from "react";
import LightScreen from "../components/LightScreen";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import CustomButton from "../components/CustomButton";
import Errors from "../components/Errors";
import useProductSearch from "../hooks/useProductSearch";
import { useSettings } from "../contexts/Settings";
import DisplayProducts from "../section/DisplayProducts";

export default function SearchScreen() {
  const { settings } = useSettings();
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setPage(0);
  }, [search]);

  const { err, loading, products, hasMore } = useProductSearch({
    available: true,
    city_id: settings.city_id,
    product_name: search,
    page_no: page,
  });
  return (
    <LightScreen>
      <NavBar title={"Search"} />
      <SearchBar search={search} setSearch={setSearch} />
      {err && <Errors errors={[err]} />}
      <DisplayProducts products={products} />
      {hasMore && (
        <CustomButton
          onClick={() => {
            if (hasMore) setPage((page) => page + 1);
          }}
          variant="text"
        >
          See More
        </CustomButton>
      )}
      <Loading
        loading={loading}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
    </LightScreen>
  );
}
