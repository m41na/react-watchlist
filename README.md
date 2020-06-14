This is a react-based demo project for a stocks watch list. View the live app [on the web](https://csb-xsdmn.vercel.app/)

## Features

With this demo, you can be able to:

### `View default symbols (radio buttons on the top left)`

From the radio boxes provided, you have 5 default options you can click on at any time<br />
You can at any time select a different symbol from the dropdown on the top right

### `Select a symbol`

From the existing dropdown on the top, right, select an option from the dropdown<br />
The selected value move to the default sesion, and the last selected value on the default options will
move to the dropdown. In that way, the default options size will remain the same (5 in this case)

### `Remove a symbol`

Using the big red action button on the top left side, click to remove the currently selected symbol.<br />
This symbol won't be available again unless you refresh the screen.

If you remove all the symbols, you will have the option to reload symbols from a given selection

### `Add a symbol`

To do thisaction in this demo, you will need to remove all the symbols first, to get the correct for to add symboils<br />
Once on this form, you can select from the options available what symbols to add

### `View symbol price details`

This is pretty straight forward. For any symbol you may have selected, clicking on a table row will show more details about the row<br />

To 'unselect' a row, click on the same row again anywhere else that's not the radio button

### `Realtime data update`

At any time you have a symbol selected, you can toggle the 'Realtime' switch on the top, right side fo the screen.<br />
The refresh interval is set at ntervals of 5 seconds using randomly simulated data.<br />

To turn off 'Realtime' mode, simply toggle the swict or select a different symbol

### `Pagination (with page size option)`

You can easily traverse the existing data set using pagination

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



