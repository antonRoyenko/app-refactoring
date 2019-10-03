Hello, this is a sample project,
the purpose of which is to determine how fast you can learn a new technology stack.

You are not limited in time;
however, we suggest that this task can be completed within 2-3 days.

If you run the project with `npm start`,
you'll see a basic form written in 'plain' react with some styling.

Your task is to refactor existing code so that it uses specific libraries
    - rewrite existing form handling with redux-form
    - move existing styles to styled-components
        (hint: some styles are global and some component-related)
        p.s. use `import styled from 'styled-components/macro';` instead of `import styled from 'styled-components';`
        since this is react-create-app
    - make reducers to use seamless-immutable instead of 'hand-made immutability'
    - replace redux-thunk with redux-saga
        p.s. redux-saga is already set-up, just write sagas ;)

Additionally:
   - you can leave comments or TODOs in places where you think improvements are possible (some new library, pattern, or approach)
   - existing code is packed into one App component. You can refactor it into more granular components if you wish

All the libraries have been already added to the project, please keep package versions as is.

If you run into some issues you can contact us at `bohdan.yaremtsio@openvpn.net`
