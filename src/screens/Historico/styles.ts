import { ReactDOM, ReactElement } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatList } from 'react-native/Libraries/Lists/FlatList';
import styled from 'styled-components/native';

export interface HeaderProps {
    bgColor: string;
}

export interface FilterButtonProps {
    active: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: #f0f0f0;
`;

export const Header = styled.View<HeaderProps>`
    height: 120;
    background-color: ${(props) => props.bgColor};
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    border-bottom-width: 1px;
    border-color: #ccc;
`;

export const HeaderLabel = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;

export const RowFilter = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px;
`;

export const FilterButton = styled.TouchableOpacity<FilterButtonProps>`
    background-color: ${(props) => (props?.active ? '#CCE1E1' : '#FFFFFF')};
    padding: 10px;
    border-radius: 10px;
    elevation: 5;
`;

export const BoxContainer = styled.View`
    background-color: #fff;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    elevation: 5;
`;

export const BoxText = styled.Text`
    font-size: 16px;
    color: #333;
`;

export const ListContainer = styled.FlatList`
    padding: 15px;
` as typeof FlatList;

export const ListItem = styled.TouchableOpacity`
    background-color: ${(props) => (props?.present ? '#7BD164' : '#F08638')};
    padding: 20px;
    border-bottom-width: 1px;
    border-color: #ccc;
    border-radius: 5px;
`;

export const ListItemText = styled.Text`
    font-size: 16px;
    color: #333;
`;

export const ExpandedLabel = styled.View`
    height: 100px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-color: #ccc;
`;

export const ExpandedLabelText = styled.Text`
    font-size: 16px;
    color: #333;
`;
