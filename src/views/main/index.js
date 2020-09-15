import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Header, Container, Row } from "./styles";
import { useSelector } from "react-redux";
import Content from "../../components/Content/index";
import InputSearch from "../../components/InputSearch/index";
import FilterButton from "../../components/FilterButton/index";
import Card from "../../components/Card/index";
import Filter from "../../components/Filter/index";
import RemoveFilter from "../../components/RemoveFilter";

const main = () => {
  const data = useSelector((state) => state.data);

  const [initialData, setInitData] = useState(data);
  const [dataRender, setDataRender] = useState();
  const [openFilter, setopenFilter] = useState(false);
  const [filterLanguage, setFilterLanguage] = useState("");
  const [filterModule, setFilterModule] = useState("");

  //Funcões executadas quando a Language for alterada
  useEffect(() => {
    filterLanguageButton();
  }, [filterLanguage]);

  //Funcões executadas quando o a module for alterado
  useEffect(() => {
    filterModuleButton();
  }, [filterModule]);

  //Debounce
  let time = null;
  function handleSearch(value) {
    clearTimeout(time);
    time = setTimeout(async () => {
      filterValuesInput(value);
    }, 1000);
  }

  //Dados filtrados do Input Search
  const filterValuesInput = useCallback((value) => {
    const formattedQuery = value.toLowerCase();
    const dataFiltered = initialData.filter((data) => {
      const resourceValue = data.resource.value.toLowerCase();
      return resourceValue.includes(formattedQuery);
    });
    setDataRender(dataFiltered);
  }, []);

  //Dados filtrados do botão de filtro - Language
  const filterLanguageButton = useCallback(() => {
    const dataFiltered = initialData.filter((data) => {
      const language = data.resource.language_id;
      return language.includes(filterLanguage);
    });
    setDataRender(dataFiltered);
  }, [filterLanguage]);

  //Dados filtrados do botão de filtro - Language
  const filterModuleButton = useCallback(() => {
    const dataFiltered = initialData.filter((data) => {
      const module = data.resource.module_id;
      return module.includes(filterModule);
    });
    setDataRender(dataFiltered);
  }, [filterModule]);

  const renderItem = useCallback(
    ({ item }) => <Card data={item.resource} />,
    []
  );

  const keyExtractor = useCallback((item) => JSON.stringify(item.resource), []);

  const getItemLayout = useCallback(
    (data, index) => ({ length: 135, offset: 135 * index, index }),
    []
  );

  const clearFilter = () => {
    setFilterLanguage("");
    setFilterModule("");
    setDataRender(initialData);
  };

  return (
    <>
      <Header>
        <Container style={{ paddingVertical: 20 }}>
          <Row>
            <InputSearch onChangeText={handleSearch} />
            <FilterButton onPress={() => setopenFilter(!openFilter)} />
          </Row>
          <Row>
            {filterModule != "" && (
              <RemoveFilter filter={filterModule} onPress={clearFilter} />
            )}

            {filterLanguage != "" && (
              <RemoveFilter filter={filterLanguage} onPress={clearFilter} />
            )}
          </Row>
        </Container>
      </Header>
      <Content>
        <Container>
          <FlatList
            data={dataRender}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            maxToRenderPerBatch={6}
            getItemLayout={getItemLayout}
          />
        </Container>
        <Filter
          visible={openFilter}
          onPress={() => setopenFilter(!openFilter)}
          filterLanguage={setFilterLanguage}
          filterModule={setFilterModule}
        />
      </Content>
    </>
  );
};

export default main;
