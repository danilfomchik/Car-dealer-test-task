# README

## Getting started

### Prepare for running app local

-   Node.js vesion >= 20.x.x and npm version >= 10.x.x required
-   Run `npm install`<br />
-   Run `npm run dev` <br />

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## React Component code styleguide

### Component structure

    import React, {useEffect, useState, useMemo, useCallback} from 'react';
    import {useSelector} from 'react-redux';
    import lib from 'lib';

    import {fetchData} from '../fetchData'
    import {selectList, selectLoading} from '../selectors'
    import {useAppDispatch} from '../../store';
    import hooks from './hooks';
    import utils from './utils';
    import helper from './helper';
    import config from './config';
    import constants from './constants';
    import Component from './Component';
    import Button from '../common/Button';
    import IValues from './types';

    const MyComponent = () => {
        const [editMode, setEditMode] = useState(false);
        const [values, setValues] = useState<IValues[]>([]);

        const dispatch = useAppDispatch();
        const list = useSelector(selectList)
        const isLoading = useSelector(selectLoading(slicesName, thunksName || thunksNames[]));

        const valuesIds = useMemo(() => values.map(value => value.id), [values]);

        ...hooks, ...localStorage, ...constants;

        const getData = useCallback(() => {}, []);

        const handleClick = useCallback((item) => setValues(item),[]);

        useEffect(() => {
            dispatch(fetchData());
        }, [dispatch]);

        return (
            <>
                <Component getData={getData} />
                <Button onClick={handleClick}>Click</Button>
            </>
        );
    };

    export default MyComponent;

### Branch naming

-   Use git-flow for naming branch https://danielkummer.github.io/git-flow-cheatsheet/
-   Commit message should include branch name.

## Names

-   Use camelCase for type names and enum values
-   Use camelCase for function and method names
-   Use camelCase for function and method names
-   Use whole words in names when possible

## Style

-   Use arrow functions => over anonymous function expressions

## Screenshots

![Home page without values](https://i.postimg.cc/6pTtd1X3/Screenshot-1.png)

![Home page with values](https://i.postimg.cc/TYdRP3Nn/Screenshot-2.png)

![Result page with list of cars models](https://i.postimg.cc/T2qdGD0R/Screenshot-4.png)

![Error page](https://i.postimg.cc/VvRmFxvS/Screenshot-5.png)

![Error message](https://i.postimg.cc/GtrbGLLw/Screenshot-6.png)
