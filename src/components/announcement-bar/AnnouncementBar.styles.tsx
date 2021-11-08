import styled from "styled-components";
import Breakpoints from "../ui/Breakpoints";

const AnnouncementBarStyles = styled.div`
  display: block;

  overflow: hidden;

  background: #f8fafc;

  box-shadow: 0 1px 0 0 rgba(0, 20, 56, 0.06);

  @media (max-width: ${Breakpoints.screenXsMax}) {
    display: none;
  }

  .link-wrapper {
    display: block;
  }

  .ui-container {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 2rem;
  }
  .ui-paragraph {
    font-size: 0.75rem;
    margin-block-end: 0.2px;
    margin-inline-end: 2rem;
  }

  button {
    cursor: pointer;

    font-family: inherit;
    border-radius: 1000px;

    font-weight: 600;
    font-size: 11px;
    line-height: 112%;
    display: flex;
    align-items: center;
    text-align: center;

    padding: 0.375rem 0.5rem;

    color: #ffffff;
    background-color: var(--c-blue-80);

    border: none;

    transition: background-color 0.2s ease-out;

    &:hover,
    &:active {
      background-color: var(--c-blue-70);
    }
  }

  //#region ------------- Q1 EVENT -----------------------
  &.ui-announcement-bar--q1-event {
    background: #00376f var(--asset-path);
    background-size: 1800px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .ui-container {
      min-height: 4.5rem;
    }

    .ui-paragraph {
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;

      color: #cad3e1;

      strong,
      b {
        color: #fff;
      }
    }

    .ui-button {
      --c-background: linear-gradient(85.46deg, #4cc3ff 0%, #4172ff 100%),
        #3880ff;
      --c-focus: #c2d8ff;
      --c-background--hover: linear-gradient(85.46deg, #4cc3ff 0%, #4172ff 100%),
        #3880ff;
      --c-background--active: linear-gradient(
          85.46deg,
          #4cc3ff 0%,
          #4172ff 100%
        ),
        #3880ff;

      font-weight: 600;
      font-size: 13px;
      line-height: 112%;
      color: #fff;

      padding: 7.5px 12px 9.5px;

      min-height: 32px;

      white-space: nowrap;
      text-transform: none;
    }
  }
  //#endregion

  //#region ------------- IONICONF ------------------
  &.ui-announcement-bar--ioniconf {
    background: #000 var(--asset-path);
    background-size: 1800px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .ui-container {
      &::before {
        content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU1IiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNDYuOTMgNy4zM3YtLjVoLTQuNDZWMy45NGwxLjM3LS4xYTQuOTYgNC45NiAwIDAwMi45LS45NiA0LjA4IDQuMDggMCAwMDEuMjgtMi4xMWgzLjF2MTQuOTloMy4zOHYzLjQyaC0xMi4yNXYtMy40Mmg0LjY4VjcuMzN6IiBzdHJva2U9IiMwMEQyODciLz48cGF0aCBkPSJNMTI4LjkzIDguMThoLTQuMDVhNS45MiA1LjkyIDAgMDEtLjItMS41OGMwLTMuNjYgMy4xNi02LjEgNy4wMi02LjEgMi4xMyAwIDMuODIuNjIgNC45OCAxLjY1YTUuNDcgNS40NyAwIDAxMS44IDQuMjFjMCAyLjQzLTEuNDcgNC4yNS0zLjY4IDYuMDUgMCAwIDAgMCAwIDBsLTIuOTggMi40LTEuMS45aDcuNzJ2My40N0gxMjQuOXYtMi45M2w1LjI2LTQuMzNzMCAwIDAgMGMxLjIyLS45OSAyLjIyLTEuODIgMi45MS0yLjYyLjctLjggMS4xMy0xLjYxIDEuMTMtMi41NiAwLS43LS4yMi0xLjM4LS42Ny0xLjlhMi41NyAyLjU3IDAgMDAtMi0uODQgMi42IDIuNiAwIDAwLTIuMDMuOTFjLS40Ny41Ni0uNyAxLjMtLjcgMi4wNyAwIC40Mi4wNC44Mi4xMyAxLjJ6IiBzdHJva2U9IiNGRkNFMzEiLz48bWFzayBpZD0iYSIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEwNy4xNyAxMGMwIDUuOSAyLjc0IDEwIDcuNjggMTAgNC45NSAwIDcuNjgtNC4xIDcuNjgtMTBzLTIuNzMtMTAtNy42OC0xMGMtNC45NCAwLTcuNjggNC4xLTcuNjggMTB6bTQuOTUgMGMwLTMuMzQuNi01LjkgMi43My01LjkgMS4wNyAwIDEuNzUuNjIgMi4xNiAxLjY3bC00Ljg5IDQuNThWMTB6bTUuNDcgMGMwIDMuMzQtLjYgNS45LTIuNzQgNS45LTEuMDYgMC0xLjc1LS42Mi0yLjE2LTEuNjdsNC45LTQuNTVWMTB6Ii8+PC9tYXNrPjxwYXRoIGQ9Ik0xMTcuMDEgNS43N2wuNjkuNzMuNS0uNDYtLjI2LS42NC0uOTMuMzd6bS00Ljg5IDQuNThoLTF2Mi4zbDEuNjgtMS41Ny0uNjgtLjczem0uNTcgMy44OGwtLjY4LS43My0uNS40Ni4yNS42NC45My0uMzd6bTQuOS00LjU1aDF2LTIuM2wtMS42OCAxLjU2LjY4Ljc0em0tMTEuNDIuMzJjMCAzLjA5LjcyIDUuODIgMi4xOCA3LjhhNy43NyA3Ljc3IDAgMDA2LjUgMy4ydi0yYTUuNzggNS43OCAwIDAxLTQuODktMi4zOGMtMS4xMy0xLjU0LTEuNzktMy44LTEuNzktNi42MmgtMnptOC42OCAxMWMyLjc5IDAgNS4wMS0xLjE3IDYuNS0zLjIgMS40Ny0xLjk4IDIuMTgtNC43MSAyLjE4LTcuOGgtMmMwIDIuODEtLjY1IDUuMDgtMS43OCA2LjYyYTUuNzggNS43OCAwIDAxLTQuOSAyLjM4djJ6bTguNjgtMTFjMC0zLjA5LS43LTUuODItMi4xOC03LjhhNy43NyA3Ljc3IDAgMDAtNi41LTMuMnYyYzIuMTcgMCAzLjc5Ljg4IDQuOSAyLjM4IDEuMTMgMS41NCAxLjc4IDMuOCAxLjc4IDYuNjJoMnptLTguNjgtMTFjLTIuNzggMC01IDEuMTctNi41IDMuMi0xLjQ2IDEuOTgtMi4xOCA0LjcxLTIuMTggNy44aDJjMC0yLjgxLjY2LTUuMDggMS44LTYuNjJBNS43OCA1Ljc4IDAgMDExMTQuODQgMXYtMnptLTEuNzMgMTFjMC0xLjY0LjE1LTIuOTYuNS0zLjg0YTIgMiAwIDAxLjU0LS44NGMuMTctLjEzLjM4LS4yMi43LS4yMnYtMmMtLjc2IDAtMS40Mi4yMy0xLjk3LjY4YTMuOTkgMy45OSAwIDAwLTEuMTMgMS42NSAxMy4wNCAxMy4wNCAwIDAwLS42NCA0LjU3aDJ6bTEuNzMtNC45Yy4zMyAwIC41NC4wOS43LjIyLjE4LjE0LjM3LjQuNTMuODFsMS44Ni0uNzNhMy44OCAzLjg4IDAgMDAtMS4xMy0xLjY0IDMuMDQgMy4wNCAwIDAwLTEuOTYtLjY2djJ6bTEuNDgtLjA2bC00LjkgNC41OCAxLjM3IDEuNDYgNC45LTQuNTgtMS4zNy0xLjQ2em0tMy4yMSA1LjMxdi0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMVYxMCAxMGgtMS0xVjEwLjM2aDJ6bTMuNDctLjM1YzAgMS42NC0uMTYgMi45Ni0uNSAzLjg0LS4xNy40My0uMzYuNjktLjU0Ljg0LS4xNy4xMy0uMzguMjItLjcuMjJ2MmMuNzUgMCAxLjQyLS4yMyAxLjk3LS42OC41Mi0uNDMuODgtMS4wMiAxLjEzLTEuNjUuNDktMS4yNC42NC0yLjg3LjY0LTQuNTdoLTJ6bS0xLjc0IDQuOWMtLjMyIDAtLjUzLS4wOS0uNy0uMjJhMS45IDEuOSAwIDAxLS41Mi0uODFsLTEuODcuNzNjLjI1LjYzLjYgMS4yMSAxLjE0IDEuNjQuNTUuNDQgMS4yMS42NiAxLjk1LjY2di0yem0tMS40Ny4wNmw0Ljg5LTQuNTUtMS4zNi0xLjQ3LTQuOSA0LjU2IDEuMzcgMS40NnptMy4yLTUuMjhWMTBoMnYtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMS0uMDEtLjAxLS4wMWgtMnoiIGZpbGw9IiMyNEEzRkYiIG1hc2s9InVybCgjYSkiLz48cGF0aCBkPSJNOTUuNTggOC4xOGgtNC4wNGE1LjkyIDUuOTIgMCAwMS0uMi0xLjU4YzAtMy42NiAzLjE2LTYuMSA3LjAxLTYuMSAyLjE0IDAgMy44My42MiA0Ljk4IDEuNjVhNS40NyA1LjQ3IDAgMDExLjggNC4yMWMwIDIuNDMtMS40NiA0LjI1LTMuNjcgNi4wNSAwIDAgMCAwIDAgMGwtMi45OCAyLjQtMS4xLjloNy43MXYzLjQ3SDkxLjU3di0yLjkzbDUuMjUtNC4zM3MwIDAgMCAwYTI0LjIgMjQuMiAwIDAwMi45MS0yLjYyYy43LS44IDEuMTMtMS42MSAxLjEzLTIuNTYgMC0uNy0uMjItMS4zOC0uNjctMS45QTIuNTcgMi41NyAwIDAwOTguMTkgNGEyLjYgMi42IDAgMDAtMi4wNC45MWMtLjQ3LjU2LS43IDEuMy0uNyAyLjA3IDAgLjQyLjA0LjgyLjEzIDEuMnoiIHN0cm9rZT0iI0YyNEM1OCIvPjxwYXRoIGQ9Ik0xLjA4IDQuM2MuNjIgMCAxLjA5LS40MyAxLjA5LTEgMC0uNjItLjQ3LTEuMDQtMS4wOS0xLjA0Qy40NSAyLjI2IDAgMi42OCAwIDMuMjljMCAuNTguNDUgMSAxLjA4IDF6TS40MiAxOS4zNWgxLjNWNi4wM0guNDJ2MTMuMzJ6TTEwLjE2IDE5LjY3YzQuNCAwIDcuMDYtMy4zNiA3LjA2LTYuOThhNi44NiA2Ljg2IDAgMDAtNy4wNi02Ljk4IDYuODYgNi44NiAwIDAwLTcuMDcgNi45OCA2Ljg2IDYuODYgMCAwMDcuMDcgNi45OHptLTUuNzQtNi45OGMwLTMuMjMgMi4yMy01Ljg0IDUuNzQtNS44NCAzLjUgMCA1LjczIDIuNjEgNS43MyA1Ljg0IDAgMy4yMi0yLjIzIDUuODQtNS43MyA1Ljg0LTMuNSAwLTUuNzQtMi42Mi01Ljc0LTUuODR6TTIwLjIgNi4wM2gtMS4zdjEzLjMyaDEuM1YxMS4zYzAtMi45OCAyLjE1LTQuNDkgNC42OC00LjQ5IDIuOCAwIDQuMTQgMS42MSA0LjE0IDQuM3Y4LjIzaDEuMzF2LTguNmMwLTIuODctMS44NC01LjA0LTUuMzQtNS4wNC0yLjk4IDAtNC4zNyAxLjcyLTQuNzkgMi40OVY2LjAzek0zMi45NSA0LjNjLjYxIDAgMS4wOS0uNDMgMS4wOS0xIDAtLjYyLS40OC0xLjA0LTEuMDktMS4wNC0uNjQgMC0xLjA4LjQyLTEuMDggMS4wMyAwIC41OC40NCAxIDEuMDggMXptLS42NyAxNS4wNWgxLjMxVjYuMDNoLTEuM3YxMy4zMnpNMzUuMDQgMTIuNWE3IDcgMCAwMDcuMiA3LjE3YzQuMjkgMCA2LjQ2LTIuODMgNi44NS01LjI5aC0zLjRjLS4zOCAxLjQ4LTEuNyAyLjUxLTMuNDcgMi41MS0yLjM3IDAtMy44Ny0xLjgyLTMuODctNC4zOSAwLTIuNTkgMS41LTQuNDEgMy44Ny00LjQxIDEuNzggMCAzLjA5IDEuMDMgMy40OCAyLjUxaDMuMzljLS4zOS0yLjQ2LTIuNTYtNS4yOC02Ljg0LTUuMjgtNC4yNiAwLTcuMjEgMy4yLTcuMjEgNy4xOHpNNTcuMjMgMTkuNjdjNC42MiAwIDcuNTEtMy4zIDcuNTEtNy4xNyAwLTMuODUtMi45LTcuMTgtNy41LTcuMThzLTcuNSAzLjMzLTcuNSA3LjE4YzAgMy44NiAyLjkgNy4xNyA3LjQ5IDcuMTd6bS00LjE3LTcuMTdjMC0yLjY3IDEuNzgtNC40MSA0LjE3LTQuNDEgMi40MiAwIDQuMiAxLjc0IDQuMiA0LjQxIDAgMi42NS0xLjc4IDQuMzktNC4yIDQuMzktMi40IDAtNC4xNy0xLjc0LTQuMTctNC4zOXpNNjkuMyA1LjYzaC0zLjA1djEzLjcyaDMuM3YtNy45NmMwLTIuMTQgMS4zMi0zLjM4IDMuNC0zLjM4IDEuOTggMCAyLjg3IDEuMjQgMi44NyAzLjEydjguMjJoMy4zdi04LjYyYzAtMy4yLTEuODYtNS40MS01LjM2LTUuNDEtMi4zNyAwLTMuODQgMS4wNS00LjQ1IDIuMTRWNS42M3pNODAuNjcgOC4xNHYxMS4yaDMuMzFWOC4xNWgyLjczdi0yLjVoLTIuNzN2LS40N2MwLTEuNS41My0yLjAzIDEuODctMi4wM2guODZWLjQ0cy0uOS0uMS0xLjUzLS4xYy0yLjc2IDAtNC41IDEuNDItNC41IDQuNjV2My4xNXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=");
        margin-block-end: -5px;
      }

      min-height: 4.625rem;
      display: grid;
      column-gap: 2rem;
      grid-template-columns: 155px fit-content(100%) fit-content(100%);
    }

    .ui-paragraph {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #dee3ea;
      margin: 0;

      strong,
      b {
        color: #fff;
      }
    }

    .ui-button {
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.08em;
      color: #ffffff;

      --height: 2rem;

      --padding: 8px 12px 9px;

      border-radius: 0px;

      white-space: nowrap;
      text-transform: uppercase;

      background: linear-gradient(0deg, #ff8753, #ff8753);
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.06);

      span {
        padding: 0;
        margin: 0;
        max-width: 15px;
        overflow: hidden;
      }
    }
  }
  //#endregion

  //#region ------------- Q3 EVENT 2021 ------------------
  &.ui-announcement-bar--q3-event-2021 {
    background: #03060b var(--asset-path);
    background-size: 1800px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .ui-container {
      min-height: 4.5rem;
    }

    .ui-paragraph {
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;

      color: #cad3e1;

      strong,
      b {
        color: #fff;
      }
    }

    .ui-button {
      --c-background: #fff;
      --c-focus: rgba(255, 255, 255, 0.03);
      --c-background--hover: rgba(255, 255, 255, 0.9);
      --c-background--active: rgba(255, 255, 255, 0.9);
      --c-text: #03060b;

      font-size: 12px;
      line-height: 14px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;

      padding: 0.375rem 0.675rem;

      white-space: nowrap;
      text-transform: uppercase;
    }
  }
  //#endregion

  //#region ------------- ENTERPRISE APP SUMMIT ----------
  &.ui-announcement-bar--enterprise-app-summit-2021 {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwMCIgaGVpZ2h0PSI3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMwMDU0RTkiIGQ9Ik0wIDBoMTgwMHY3MkgweiIvPjxnIG9wYWNpdHk9Ii43IiBmaWx0ZXI9InVybCgjYikiPjxlbGxpcHNlIGN4PSI2Ny4zIiBjeT0iNzAuMjYiIHJ4PSIxMjMuNDQiIHJ5PSI4Ni4xOSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyOC41IDY3LjMgNzAuMjYpIiBmaWxsPSIjQkZFNEZGIi8+PC9nPjxnIG9wYWNpdHk9Ii43IiBmaWx0ZXI9InVybCgjYykiPjxlbGxpcHNlIGN4PSIxNDQ4Ljg3IiBjeT0iNjYuOTgiIHJ4PSIxMzYuNDkiIHJ5PSI5NS4zIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDYuODIgMTQ0OC44NyA2Ni45OCkiIGZpbGw9IiNBN0RBRkYiLz48L2c+PGcgb3BhY2l0eT0iLjciIGZpbHRlcj0idXJsKCNkKSI+PGVsbGlwc2UgY3g9IjY0Ny40MiIgY3k9IjUzLjEzIiByeD0iMTM1LjMiIHJ5PSI5NC40NyIgdHJhbnNmb3JtPSJyb3RhdGUoLTE3LjEyIDY0Ny40MiA1My4xMykiIGZpbGw9IiMwMDMzRTgiLz48L2c+PGcgb3BhY2l0eT0iLjciIGZpbHRlcj0idXJsKCNlKSI+PGVsbGlwc2UgY3g9IjE3OTguNTkiIGN5PSIxNS4zNiIgcng9Ijk2LjAyIiByeT0iNjcuMDQiIHRyYW5zZm9ybT0icm90YXRlKC0xMDYuODYgMTc5OC41OSAxNS4zNikiIGZpbGw9IiMwMTJCQzAiLz48L2c+PC9nPjxkZWZzPjxmaWx0ZXIgaWQ9ImIiIHg9Ii0yODQuOTUiIHk9Ii0yOTAuMjYiIHdpZHRoPSI3MDQuNSIgaGVpZ2h0PSI3MjEuMDUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyNSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzg6MzUiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJjIiB4PSIxMDgyLjQ1IiB5PSItMzAyLjAyIiB3aWR0aD0iNzMyLjg1IiBoZWlnaHQ9IjczOCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTI1IiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfODozNSIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImQiIHg9IjI2NS4xMyIgeT0iLTI5NS41NyIgd2lkdGg9Ijc2NC41OSIgaGVpZ2h0PSI2OTcuNDEiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyNSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzg6MzUiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJlIiB4PSIxNDc4LjYyIiB5PSItMzI4LjU5IiB3aWR0aD0iNjM5LjkyIiBoZWlnaHQ9IjY4Ny44OSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTI1IiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfODozNSIvPjwvZmlsdGVyPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgxODAwdjcySDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+")
      var(--c-blue-100);
    position: relative;
    z-index: 1000;
    padding-block-start: 1rem;
    padding-block-end: 1rem;

    .ui-container {
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      &::before {
        content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM3IiBoZWlnaHQ9IjM5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMTguNyAxOS45aDEyLjlhMTMuMjIgMTMuMjIgMCAwIDEtMy44NSA5LjE1IDEyLjggMTIuOCAwIDAgMS05LjA1IDMuNzhWMTkuOVoiIGZpbGw9IiNDRERGRkYiLz48cGF0aCBkPSJNMTIwLjgzIDE5LjloLTE1LjA1YTEzLjIzIDEzLjIzIDAgMCAwIDMuODQgOS4xNSAxMi44IDEyLjggMCAwIDAgOS4wNSAzLjc4bDIuMTYtMTIuOTRaIiBmaWxsPSIjQ0RERkZGIi8+PHBhdGggZD0iTTExOC43IDE5LjloMTIuOWExMy4yMiAxMy4yMiAwIDAgMS0zLjg1IDkuMTUgMTIuOCAxMi44IDAgMCAxLTkuMDUgMy43OFYxOS45WiIgZmlsbD0iIzk3QkRGRiIvPjxwYXRoIGQ9Ik0xMTguNjcgMTkuOWgtMTIuOWExMy4yMyAxMy4yMyAwIDAgMCAzLjg1IDkuMTUgMTIuOCAxMi44IDAgMCAwIDkuMDUgMy43OFYxOS45WiIgZmlsbD0iI0NEREZGRiIvPjxwYXRoIGQ9Ik0xMTEuMiAxOS45YTEzLjI3IDEzLjI3IDAgMCAxIDMuNzMtOS4zNiAxMi44NSAxMi44NSAwIDAgMSA5LjE3LTMuODkgMTIuNzUgMTIuNzUgMCAwIDEgOS4xOCAzLjg5IDEzLjE2IDEzLjE2IDAgMCAxIDMuNzIgOS4zNSIgZmlsbD0iI0YwRjZGRiIvPjxwYXRoIGQ9Ik0xMDIuNjYgMTQuNzJhMTMuMDEgMTMuMDEgMCAwIDAtNS44LTYuNTEgMTIuNyAxMi43IDAgMCAwLTE2IDMuMTcgMTMuMjIgMTMuMjIgMCAwIDAtMi45NiA4LjI2aDEyLjk3djEzLjJoMTIuNzd2LTEzLjFjMC0xLjczLS4zMy0zLjQzLS45OC01LjAyWiIgZmlsbD0iIzk3QkRGRiIvPjxwYXRoIGQ9Ik0xMDMuNjQgMTkuNjNIOTAuNzZ2MTMuMmgxMi44N3YtMTMuMloiIGZpbGw9IiNGMEY2RkYiLz48cGF0aCBkPSJNNzcuOSAxOS42M3YuMWMwIDMuNDcgMS4zNSA2Ljc5IDMuNzcgOS4yNWExMi44MiAxMi44MiAwIDAgMCA5LjA5IDMuODRoLjF2LTEzLjJsLTEyLjk2LjAxWiIgZmlsbD0iI0NEREZGRiIvPjxwYXRoIGQ9Ik03NC4yNSAyNS43NmExMi45NCAxMi45NCAwIDAgMS03LjQ3IDYuNDUgMTIuNjggMTIuNjggMCAwIDEtMTMuNy0zLjk2IDEzLjIgMTMuMiAwIDAgMS0xLjYzLTE0LjM1IiBmaWxsPSIjOTdCREZGIi8+PHBhdGggZD0iTTUwLjEzIDE5LjY3YzAtMy40NSAxLjM0LTYuNzYgMy43NS05LjJhMTIuNzQgMTIuNzQgMCAwIDEgOS4wNS0zLjgyIDEyLjY0IDEyLjY0IDAgMCAxIDkuMDUgMy44MSAxMy4xMSAxMy4xMSAwIDAgMSAzLjc1IDkuMiIgZmlsbD0iI0NEREZGRiIvPjxwYXRoIGQ9Ik01MC4wNiAxOS4zdi4zOGgxMi41bC0xMS4xLTUuNzhhMTMuMTcgMTMuMTcgMCAwIDAtMS40IDUuNFoiIGZpbGw9IiNGMEY2RkYiLz48ZWxsaXBzZSBjeD0iMTkuMjMiIGN5PSIxOS40MiIgcng9IjE5LjIzIiByeT0iMTkuNDIiIGZpbGw9IiNCMkNFRkYiLz48cGF0aCBkPSJNMjguMDUgMi4xN2ExOS41IDE5LjUgMCAwIDEgOC4yOCAyNi4xNmwtMzQuMi0xNy44YTE5LjE1IDE5LjE1IDAgMCAxIDI1LjkyLTguMzZaIiBmaWxsPSIjOTdCREZGIi8+PHBhdGggZD0iTTE5LjIzIDI3LjkxYzQuNjQgMCA4LjQyLTMuOCA4LjQyLTguNSAwLTQuNjctMy43Ny04LjQ5LTguNDItOC40OWE4LjQ2IDguNDYgMCAwIDAtOC40MSA4LjVjMCA0LjY4IDMuNzggOC41IDguNDEgOC41Wk0zMy45MyAxMS4xNGMyLjMzIDAgNC4yMS0xLjkgNC4yMS00LjI0YTQuMjMgNC4yMyAwIDAgMC00LjItNC4yNWMtMi4zMyAwLTQuMjEgMS45LTQuMjEgNC4yNWE0LjIzIDQuMjMgMCAwIDAgNC4yIDQuMjRaIiBmaWxsPSIjRTNFREZGIi8+PC9zdmc+");
        display: block;

        margin-inline-end: 2rem;
        margin-block-end: -0.125rem;
      }

      .ui-paragraph {
        font-weight: 500;

        margin-inline-end: 2rem;
        margin-block-end: 0;
        color: #dee3ea;
      }

      button {
        font-family: inherit;
        white-space: nowrap;

        border-radius: 0;

        padding: 8px 12px 9px;

        background: #fff;
        color: var(--c-blue-100);

        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 15px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.08em;

        transition: background-color 0.2s ease-out;

        &:hover,
        &:active {
          background: rgba(255, 255, 255, 0.8);
        }

        .soehne-arrow {
          transform: none;
        }
      }
    }
  }
  //#endregion
`;

export default AnnouncementBarStyles;