import { useState, useRef, useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Slide } from '../CarouselSlide/carrouselSlide';
import * as React from 'react';

export function CarouselComponent({ slideList }) {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);
        const distance = Math.abs(roundIndex - index);
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);
    return (
        <FlatList
            data={slideList}
            style={{ flex: 1, padding: 0, margin: 0 }}
            renderItem={({ item }) => {
                return <Slide data={item} />;
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
        />
    );
}
