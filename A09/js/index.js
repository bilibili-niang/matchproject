//fullpageJS的控制
window.onload = function () {
    new fullpage('#fullpage', {
        // sectionsColor: ['#0da5d5', '#2ab561', '#de8910', '#16ba9d', '#0da5d5'],
        sectionsColor: SectionColor,
        verticalCentered: false,
        afterLoad: function (origin, destination, direction) {
            /*
            afterLoad:滚动结束之后调用的回调参数,
            origin:保存了滚动出去的那一屏相关的信息
            destination:保存了滚入的那一屏的相关信息
            direction:保存了当前滚动的方向 down / up
            注意点:第一次进入网页,也会调用afterLoad方法,之不过第一个参数和最后一个参数是null而已

            * */
            // console.log(origin, destination, direction);
            // 为滚入的那页添加current类名

            if (origin !== null) {
                // 将上一屏的类名中的 current 给去掉
                origin.item.className = origin.item.className.replace(" current", "");
            }
            destination.item.className = destination.item.className + " current";

        },
        /*显示右侧小圆点*/
        navigation: false,
        //实现无限循环滚动
        continueVertical: false,
        /*设置在第一网上滚是否回滚到最后一页*/
        loopTop: false,
        /*设置滚动到第一页再往上滚是否回滚到最后一页*/
        loopBottom: false,
        showActiveTooltip: true,
        navigationPosition: 'right',
    });
};

//第一页左上角的扩展图
(function () {
    var mychart = echarts.init(document.querySelector('.section-one .one_kuozhan'));
    var pathSymbols = {
        // reindeer:
        //     'path//d="M502.381133 251.932447 550.577796 251.932447l0 491.483162-65.797142 0L484.780654 394.578195 370.070551 394.578195l0-48.912961C449.784351 340.139502 482.836415 332.464875 502.381133 251.932447zM1013.409014 512.051164c0 276.491256-224.917758 501.409014-501.409014 501.409014s-501.409014-224.917758-501.409014-501.409014 224.917758-501.409014 501.409014-501.409014S1013.409014 235.559908 1013.409014 512.051164zM974.831218 512.051164c0-255.309284-207.521935-462.831218-462.831218-462.831218S49.168782 256.741881 49.168782 512.051164 256.690716 974.882382 512 974.882382 974.831218 767.258119 974.831218 512.051164z" p-id="2619"',
        // plane: 'path://M1.112,32.559l2.998,1.205l-2.882,2.268l-2.215-0.012L1.112,32.559z M37.803,23.96 c0.158-0.838,0.5-1.509,0.961-1.904c-0.096-0.037-0.205-0.071-0.344-0.071c-0.777-0.005-2.068-0.009-3.047-0.009 c-0.633,0-1.217,0.066-1.754,0.18l2.199,1.804H37.803z M39.738,23.036c-0.111,0-0.377,0.325-0.537,0.924h1.076 C40.115,23.361,39.854,23.036,39.738,23.036z M39.934,39.867c-0.166,0-0.674,0.705-0.674,1.986s0.506,1.986,0.674,1.986 s0.672-0.705,0.672-1.986S40.102,39.867,39.934,39.867z M38.963,38.889c-0.098-0.038-0.209-0.07-0.348-0.073 c-0.082,0-0.174,0-0.268-0.001l-7.127,4.671c0.879,0.821,2.42,1.417,4.348,1.417c0.979,0,2.27-0.006,3.047-0.01 c0.139,0,0.25-0.034,0.348-0.072c-0.646-0.555-1.07-1.643-1.07-2.967C37.891,40.529,38.316,39.441,38.963,38.889z M32.713,23.96 l-12.37-10.116l-4.693-0.004c0,0,4,8.222,4.827,10.121H32.713z M59.311,32.374c-0.248,2.104-5.305,3.172-8.018,3.172H39.629 l-25.325,16.61L9.607,52.16c0,0,6.687-8.479,7.95-10.207c1.17-1.6,3.019-3.699,3.027-6.407h-2.138 c-5.839,0-13.816-3.789-18.472-5.583c-2.818-1.085-2.396-4.04-0.031-4.04h0.039l-3.299-11.371h3.617c0,0,4.352,5.696,5.846,7.5 c2,2.416,4.503,3.678,8.228,3.87h30.727c2.17,0,4.311,0.417,6.252,1.046c3.49,1.175,5.863,2.7,7.199,4.027 C59.145,31.584,59.352,32.025,59.311,32.374z M22.069,30.408c0-0.815-0.661-1.475-1.469-1.475c-0.812,0-1.471,0.66-1.471,1.475 s0.658,1.475,1.471,1.475C21.408,31.883,22.069,31.224,22.069,30.408z M27.06,30.408c0-0.815-0.656-1.478-1.466-1.478 c-0.812,0-1.471,0.662-1.471,1.478s0.658,1.477,1.471,1.477C26.404,31.885,27.06,31.224,27.06,30.408z M32.055,30.408 c0-0.815-0.66-1.475-1.469-1.475c-0.808,0-1.466,0.66-1.466,1.475s0.658,1.475,1.466,1.475 C31.398,31.883,32.055,31.224,32.055,30.408z M37.049,30.408c0-0.815-0.658-1.478-1.467-1.478c-0.812,0-1.469,0.662-1.469,1.478 s0.656,1.477,1.469,1.477C36.389,31.885,37.049,31.224,37.049,30.408z M42.039,30.408c0-0.815-0.656-1.478-1.465-1.478 c-0.811,0-1.469,0.662-1.469,1.478s0.658,1.477,1.469,1.477C41.383,31.885,42.039,31.224,42.039,30.408z M55.479,30.565 c-0.701-0.436-1.568-0.896-2.627-1.347c-0.613,0.289-1.551,0.476-2.73,0.476c-1.527,0-1.639,2.263,0.164,2.316 C52.389,32.074,54.627,31.373,55.479,30.565z',
        // rocket: 'path://M-244.396,44.399c0,0,0.47-2.931-2.427-6.512c2.819-8.221,3.21-15.709,3.21-15.709s5.795,1.383,5.795,7.325C-237.818,39.679-244.396,44.399-244.396,44.399z M-260.371,40.827c0,0-3.881-12.946-3.881-18.319c0-2.416,0.262-4.566,0.669-6.517h17.684c0.411,1.952,0.675,4.104,0.675,6.519c0,5.291-3.87,18.317-3.87,18.317H-260.371z M-254.745,18.951c-1.99,0-3.603,1.676-3.603,3.744c0,2.068,1.612,3.744,3.603,3.744c1.988,0,3.602-1.676,3.602-3.744S-252.757,18.951-254.745,18.951z M-255.521,2.228v-5.098h1.402v4.969c1.603,1.213,5.941,5.069,7.901,12.5h-17.05C-261.373,7.373-257.245,3.558-255.521,2.228zM-265.07,44.399c0,0-6.577-4.721-6.577-14.896c0-5.942,5.794-7.325,5.794-7.325s0.393,7.488,3.211,15.708C-265.539,41.469-265.07,44.399-265.07,44.399z M-252.36,45.15l-1.176-1.22L-254.789,48l-1.487-4.069l-1.019,2.116l-1.488-3.826h8.067L-252.36,45.15z',
        // train: 'path://M67.335,33.596L67.335,33.596c-0.002-1.39-1.153-3.183-3.328-4.218h-9.096v-2.07h5.371 c-4.939-2.07-11.199-4.141-14.89-4.141H19.72v12.421v5.176h38.373c4.033,0,8.457-1.035,9.142-5.176h-0.027 c0.076-0.367,0.129-0.751,0.129-1.165L67.335,33.596L67.335,33.596z M27.999,30.413h-3.105v-4.141h3.105V30.413z M35.245,30.413 h-3.104v-4.141h3.104V30.413z M42.491,30.413h-3.104v-4.141h3.104V30.413z M49.736,30.413h-3.104v-4.141h3.104V30.413z  M14.544,40.764c1.143,0,2.07-0.927,2.07-2.07V35.59V25.237c0-1.145-0.928-2.07-2.07-2.07H-9.265c-1.143,0-2.068,0.926-2.068,2.07 v10.351v3.105c0,1.144,0.926,2.07,2.068,2.07H14.544L14.544,40.764z M8.333,26.272h3.105v4.141H8.333V26.272z M1.087,26.272h3.105 v4.141H1.087V26.272z M-6.159,26.272h3.105v4.141h-3.105V26.272z M-9.265,41.798h69.352v1.035H-9.265V41.798z',
        // ship: 'path://M16.678,17.086h9.854l-2.703,5.912c5.596,2.428,11.155,5.575,16.711,8.607c3.387,1.847,6.967,3.75,10.541,5.375 v-6.16l-4.197-2.763v-5.318L33.064,12.197h-11.48L20.43,15.24h-4.533l-1.266,3.286l0.781,0.345L16.678,17.086z M49.6,31.84 l0.047,1.273L27.438,20.998l0.799-1.734L49.6,31.84z M33.031,15.1l12.889,8.82l0.027,0.769L32.551,16.1L33.031,15.1z M22.377,14.045 h9.846l-1.539,3.365l-2.287-1.498h1.371l0.721-1.352h-2.023l-0.553,1.037l-0.541-0.357h-0.34l0.359-0.684h-2.025l-0.361,0.684 h-3.473L22.377,14.045z M23.695,20.678l-0.004,0.004h0.004V20.678z M24.828,18.199h-2.031l-0.719,1.358h2.029L24.828,18.199z  M40.385,34.227c-12.85-7.009-25.729-14.667-38.971-12.527c1.26,8.809,9.08,16.201,8.213,24.328 c-0.553,4.062-3.111,0.828-3.303,7.137c15.799,0,32.379,0,48.166,0l0.066-4.195l1.477-7.23 C50.842,39.812,45.393,36.961,40.385,34.227z M13.99,35.954c-1.213,0-2.195-1.353-2.195-3.035c0-1.665,0.98-3.017,2.195-3.017 c1.219,0,2.195,1.352,2.195,3.017C16.186,34.604,15.213,35.954,13.99,35.954z M23.691,20.682h-2.02l-0.588,1.351h2.023 L23.691,20.682z M19.697,18.199l-0.721,1.358h2.025l0.727-1.358H19.697z',
        // car: 'path://M49.592,40.883c-0.053,0.354-0.139,0.697-0.268,0.963c-0.232,0.475-0.455,0.519-1.334,0.475 c-1.135-0.053-2.764,0-4.484,0.068c0,0.476,0.018,0.697,0.018,0.697c0.111,1.299,0.697,1.342,0.931,1.342h3.7 c0.326,0,0.628,0,0.861-0.154c0.301-0.196,0.43-0.772,0.543-1.78c0.017-0.146,0.025-0.336,0.033-0.56v-0.01 c0-0.068,0.008-0.154,0.008-0.25V41.58l0,0C49.6,41.348,49.6,41.09,49.592,40.883L49.592,40.883z M6.057,40.883 c0.053,0.354,0.137,0.697,0.268,0.963c0.23,0.475,0.455,0.519,1.334,0.475c1.137-0.053,2.762,0,4.484,0.068 c0,0.476-0.018,0.697-0.018,0.697c-0.111,1.299-0.697,1.342-0.93,1.342h-3.7c-0.328,0-0.602,0-0.861-0.154 c-0.309-0.18-0.43-0.772-0.541-1.78c-0.018-0.146-0.027-0.336-0.035-0.56v-0.01c0-0.068-0.008-0.154-0.008-0.25V41.58l0,0 C6.057,41.348,6.057,41.09,6.057,40.883L6.057,40.883z M49.867,32.766c0-2.642-0.344-5.224-0.482-5.507 c-0.104-0.207-0.766-0.749-2.271-1.773c-1.522-1.042-1.487-0.887-1.766-1.566c0.25-0.078,0.492-0.224,0.639-0.241 c0.326-0.034,0.345,0.274,1.023,0.274c0.68,0,2.152-0.18,2.453-0.48c0.301-0.303,0.396-0.405,0.396-0.672 c0-0.268-0.156-0.818-0.447-1.146c-0.293-0.327-1.541-0.49-2.273-0.585c-0.729-0.095-0.834,0-1.022,0.121 c-0.304,0.189-0.32,1.919-0.32,1.919l-0.713,0.018c-0.465-1.146-1.11-3.452-2.117-5.269c-1.103-1.979-2.256-2.599-2.737-2.754 c-0.474-0.146-0.904-0.249-4.131-0.576c-3.298-0.344-5.922-0.388-8.262-0.388c-2.342,0-4.967,0.052-8.264,0.388 c-3.229,0.336-3.66,0.43-4.133,0.576s-1.633,0.775-2.736,2.754c-1.006,1.816-1.652,4.123-2.117,5.269L9.87,23.109 c0,0-0.008-1.729-0.318-1.919c-0.189-0.121-0.293-0.225-1.023-0.121c-0.732,0.104-1.98,0.258-2.273,0.585 c-0.293,0.327-0.447,0.878-0.447,1.146c0,0.267,0.094,0.379,0.396,0.672c0.301,0.301,1.773,0.48,2.453,0.48 c0.68,0,0.697-0.309,1.023-0.274c0.146,0.018,0.396,0.163,0.637,0.241c-0.283,0.68-0.24,0.524-1.764,1.566 c-1.506,1.033-2.178,1.566-2.271,1.773c-0.139,0.283-0.482,2.865-0.482,5.508s0.189,5.02,0.189,5.86c0,0.354,0,0.976,0.076,1.565 c0.053,0.354,0.129,0.697,0.268,0.966c0.232,0.473,0.447,0.516,1.334,0.473c1.137-0.051,2.779,0,4.477,0.07 c1.135,0.043,2.297,0.086,3.33,0.11c2.582,0.051,1.826-0.379,2.928-0.36c1.102,0.016,5.447,0.196,9.424,0.196 c3.976,0,8.332-0.182,9.423-0.196c1.102-0.019,0.346,0.411,2.926,0.36c1.033-0.018,2.195-0.067,3.332-0.11 c1.695-0.062,3.348-0.121,4.477-0.07c0.886,0.043,1.103,0,1.332-0.473c0.132-0.269,0.218-0.611,0.269-0.966 c0.086-0.592,0.078-1.213,0.078-1.565C49.678,37.793,49.867,35.408,49.867,32.766L49.867,32.766z M13.219,19.735 c0.412-0.964,1.652-2.9,2.256-3.244c0.145-0.087,1.426-0.491,4.637-0.706c2.953-0.198,6.217-0.276,7.73-0.276 c1.513,0,4.777,0.078,7.729,0.276c3.201,0.215,4.502,0.611,4.639,0.706c0.775,0.533,1.842,2.28,2.256,3.244 c0.412,0.965,0.965,2.858,0.861,3.116c-0.104,0.258,0.104,0.388-1.291,0.275c-1.387-0.103-10.088-0.216-14.185-0.216 c-4.088,0-12.789,0.113-14.184,0.216c-1.395,0.104-1.188-0.018-1.291-0.275C12.254,22.593,12.805,20.708,13.219,19.735 L13.219,19.735z M16.385,30.511c-0.619,0.155-0.988,0.491-1.764,0.482c-0.775,0-2.867-0.353-3.314-0.371 c-0.447-0.017-0.842,0.302-1.076,0.362c-0.23,0.06-0.688-0.104-1.377-0.318c-0.688-0.216-1.092-0.155-1.316-1.094 c-0.232-0.93,0-2.264,0-2.264c1.488-0.068,2.928,0.069,5.621,0.826c2.693,0.758,4.191,2.213,4.191,2.213 S17.004,30.357,16.385,30.511L16.385,30.511z M36.629,37.293c-1.23,0.164-6.386,0.207-8.794,0.207c-2.412,0-7.566-0.051-8.799-0.207 c-1.256-0.164-2.891-1.67-1.764-2.865c1.523-1.627,1.24-1.576,4.701-2.023C24.967,32.018,27.239,32,27.834,32 c0.584,0,2.865,0.025,5.859,0.404c3.461,0.447,3.178,0.396,4.699,2.022C39.521,35.623,37.887,37.129,36.629,37.293L36.629,37.293z  M48.129,29.582c-0.232,0.93-0.629,0.878-1.318,1.093c-0.688,0.216-1.145,0.371-1.377,0.319c-0.231-0.053-0.627-0.371-1.074-0.361 c-0.448,0.018-2.539,0.37-3.313,0.37c-0.772,0-1.146-0.328-1.764-0.481c-0.621-0.154-0.966-0.154-0.966-0.154 s1.49-1.464,4.191-2.213c2.693-0.758,4.131-0.895,5.621-0.826C48.129,27.309,48.361,28.643,48.129,29.582L48.129,29.582z',
        // run: 'path://M13.676,32.955c0.919-0.031,1.843-0.008,2.767-0.008v0.007c0.827,0,1.659,0.041,2.486-0.019 c0.417-0.028,1.118,0.325,1.14-0.545c0.014-0.637-0.156-1.279-0.873-1.367c-1.919-0.241-3.858-0.233-5.774,0.019 c-0.465,0.062-0.998,0.442-0.832,1.069C12.715,32.602,13.045,32.977,13.676,32.955z M14.108,29.013 c1.47-0.007,2.96-0.122,4.414,0.035c1.792,0.192,3.1-0.412,4.273-2.105c-3.044,0-5.882,0.014-8.719-0.01 c-0.768-0.005-1.495,0.118-1.461,1C12.642,28.731,13.329,29.014,14.108,29.013z M23.678,36.593c-0.666-0.69-1.258-1.497-2.483-1.448 c-2.341,0.095-4.689,0.051-7.035,0.012c-0.834-0.014-1.599,0.177-1.569,1.066c0.031,0.854,0.812,1.062,1.636,1.043 c1.425-0.033,2.852-0.01,4.278-0.01v-0.01c1.562,0,3.126,0.008,4.691-0.005C23.614,37.239,24.233,37.174,23.678,36.593z  M32.234,42.292h-0.002c-1.075,0.793-2.589,0.345-3.821,1.048c-0.359,0.193-0.663,0.465-0.899,0.799 c-1.068,1.623-2.052,3.301-3.117,4.928c-0.625,0.961-0.386,1.805,0.409,2.395c0.844,0.628,1.874,0.617,2.548-0.299 c1.912-2.573,3.761-5.197,5.621-7.814C33.484,42.619,33.032,42.387,32.234,42.292z M43.527,28.401 c-0.688-1.575-2.012-0.831-3.121-0.895c-1.047-0.058-2.119,1.128-3.002,0.345c-0.768-0.677-1.213-1.804-1.562-2.813 c-0.45-1.305-1.495-2.225-2.329-3.583c2.953,1.139,4.729,0.077,5.592-1.322c0.99-1.61,0.718-3.725-0.627-4.967 c-1.362-1.255-3.414-1.445-4.927-0.452c-1.933,1.268-2.206,2.893-0.899,6.11c-2.098-0.659-3.835-1.654-5.682-2.383 c-0.735-0.291-1.437-1.017-2.293-0.666c-2.263,0.927-4.522,1.885-6.723,2.95c-1.357,0.658-1.649,1.593-1.076,2.638 c0.462,0.851,1.643,1.126,2.806,0.617c0.993-0.433,1.994-0.857,2.951-1.374c1.599-0.86,3.044-0.873,4.604,0.214 c1.017,0.707,0.873,1.137,0.123,1.849c-1.701,1.615-3.516,3.12-4.933,5.006c-1.042,1.388-0.993,2.817,0.255,4.011 c1.538,1.471,3.148,2.869,4.708,4.315c0.485,0.444,0.907,0.896-0.227,1.104c-1.523,0.285-3.021,0.694-4.538,1.006 c-1.109,0.225-2.02,1.259-1.83,2.16c0.223,1.07,1.548,1.756,2.687,1.487c3.003-0.712,6.008-1.413,9.032-2.044 c1.549-0.324,2.273-1.869,1.344-3.115c-0.868-1.156-1.801-2.267-2.639-3.445c-1.964-2.762-1.95-2.771,0.528-5.189 c1.394-1.357,1.379-1.351,2.437,0.417c0.461,0.769,0.854,1.703,1.99,1.613c2.238-0.181,4.407-0.755,6.564-1.331 C43.557,30.447,43.88,29.206,43.527,28.401z',
        // walk: 'path://M29.902,23.275c1.86,0,3.368-1.506,3.368-3.365c0-1.859-1.508-3.365-3.368-3.365 c-1.857,0-3.365,1.506-3.365,3.365C26.537,21.769,28.045,23.275,29.902,23.275z M36.867,30.74c-1.666-0.467-3.799-1.6-4.732-4.199 c-0.932-2.6-3.131-2.998-4.797-2.998s-7.098,3.894-7.098,3.894c-1.133,1.001-2.1,6.502-0.967,6.769 c1.133,0.269,1.266-1.533,1.934-3.599c0.666-2.065,3.797-3.466,3.797-3.466s0.201,2.467-0.398,3.866 c-0.599,1.399-1.133,2.866-1.467,6.198s-1.6,3.665-3.799,6.266c-2.199,2.598-0.6,3.797,0.398,3.664 c1.002-0.133,5.865-5.598,6.398-6.998c0.533-1.397,0.668-3.732,0.668-3.732s0,0,2.199,1.867c2.199,1.865,2.332,4.6,2.998,7.73 s2.332,0.934,2.332-0.467c0-1.401,0.269-5.465-1-7.064c-1.265-1.6-3.73-3.465-3.73-5.265s1.199-3.732,1.199-3.732 c0.332,1.667,3.335,3.065,5.599,3.399C38.668,33.206,38.533,31.207,36.867,30.74z'
    };
    var AllLineName = Station.StationName;

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].name + ': ' + params[0].value;
            }
        },
        xAxis: {
            data: AllLineName,
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {
                color: 'rgba(255,255,255,0.8)'
            }
        },
        yAxis: {
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {show: false}
        },
        color: 'rgba(255,255,255,0.8)',
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-130%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                opacity: 0.5
            },
            emphasis: {
                itemStyle: {
                    opacity: 1
                }
            },
            data: [123, 60, 25, 18, 12, 9, 2, 1],
            z: 10
        }, {
            name: 'glyph',
            type: 'pictorialBar',
            barGap: '-100%',
            symbolPosition: 'end',
            symbolSize: 50,
            symbolOffset: [0, '-120%'],
            // data: [{
            //     value: 123,
            //     // symbol: pathSymbols.reindeer,
            //     // symbol: 'image:../static/taobao.png',
            //     // symbol: 'path://',
            //     // symbol: 'roundRect',
            //     symbolSize: [60, 60],
            //     // showAllSymbol: true,
            // }, {
            //     value: 60,
            //     symbol: pathSymbols.rocket,
            //     symbolSize: [50, 60]
            // }, {
            //     value: 25,
            //     symbol: pathSymbols.plane,
            //     symbolSize: [65, 35]
            // }, {
            //     value: 18,
            //     symbol: pathSymbols.train,
            //     symbolSize: [50, 30]
            // }, {
            //     value: 12,
            //     symbol: pathSymbols.ship,
            //     symbolSize: [50, 35]
            // }, {
            //     value: 9,
            //     symbol: pathSymbols.car,
            //     symbolSize: [40, 30]
            // }, {
            //     value: 2,
            //     symbol: pathSymbols.run,
            //     symbolSize: [40, 50]
            // }, {
            //     value: 1,
            //     symbol: pathSymbols.walk,
            //     symbolSize: [40, 50]
            // }]
        }]
    };
    mychart.setOption(option);
    //让图表跟随屏幕自适应大小
    window.addEventListener("resize", function () {
        mychart.resize();
    })
})();

//a题目:早晚客流量分布
(function () {
    $.getJSON('http://127.0.0.1:5555/data_a', function (response) {
        var mychart = echarts.init(document.querySelector('.section-one .one_a'));
        // var StatinName = Station.StationName;
        // var data = one_data__left.data;
        var option = {
            // backgroundColor: 'rgb(255,255,255)',
            color: one_data__left.Color,
            title: {
                text: '单月整体客流量分析波动',
                top: '3%',
                left: '5%',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 18,
                    color: 'rgba(255,255,255,0.8)'
                },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                // data: StatinName,
                // data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5', 'Line 10', 'Line 11', 'Line 12'],
                top: '10%',
                right: '1%',
                bottom: '3%',
                textStyle: {
                    color: 'rgba(255,255,255,1)'
                }
            },
            toolbox: {
                /* feature: {
                     saveAsImage: {}
                 }*/
            },
            grid: {
                left: '0%',
                right: '2%',
                bottom: '2%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    // data: ['七点', '九点', '十一点', '下午一点', '下午三点', '下午五点', '晚上七点', '晚上九点']
                    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(255,255,255,0.6)',  //坐标的字体颜色
                        },
                    },
                    axisLine: {
                        // show:false,
                        lineStyle: {
                            color: 'rgba(255,255,255,0.5)'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(255,255,255,0.6)',  //坐标的字体颜色
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.4)'
                        }
                    },
                    splitLine: {
                        //去掉y轴的横线
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(128, 255, 165)'
                        }, {
                            offset: 1,
                            color: 'rgba(1, 191, 236,0.6)'
                        }])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: response.data
                    // data: ['176636', '11476', '106324', '248043', '338641', '374989']
                },
                /*{
                    name: StatinName[1],
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 221, 255)'
                        }, {
                            offset: 1,
                            color: 'rgba(77, 119, 255,0.2)'
                        }])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: data[1]
                },
                {
                    name: StatinName[2],
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(55, 162, 255)'
                        }, {
                            offset: 1,
                            color: 'rgba(116, 21, 219,0.2)'
                        }])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: data[2]
                },
                {
                    name: StatinName[3],
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 0, 135)'
                        }, {
                            offset: 1,
                            color: 'rgba(135, 0, 157,0.2)'
                        }])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: data[3]
                },
                {
                    name: StatinName[4],
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 191, 0)'
                        }, {
                            offset: 1,
                            color: 'rgba(224, 62, 76,0.2)'
                        }])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: data[4]
                },
                {
                    name: StatinName[5],
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(37, 57, 255,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(101, 11, 94,0.2)'
                        }])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: data[5]
                },
                {
                    name: StatinName[6],
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {
                        opacity: 0.9,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(23, 138, 245)'
                        }, {
                            offset: 1,
                            color: 'rgba(11, 203, 255,0.2)'
                        }])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: data[6]
                },
                {
                    name: StatinName[7],
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {
                        opacity: 0.9,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(97, 235, 13)'
                        }, {
                            offset: 1,
                            color: 'rgba(163, 246, 113,0.2)'
                        }])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: data[7]
                }*/
            ]
        };
        mychart.setOption(option);
        //让图表跟随屏幕自适应大小
        window.addEventListener("resize", function () {
            mychart.resize();
        })
    })
})();


//b题目:工作日和周末客流分析
(function () {
    $.getJSON('http://127.0.0.1:5555/data_b', function (response) {
        console.log(response);
        var l1 = response.WorkDay
        var l2 = response.WeekendDay
        var l3 = response.Holidays
        // data1 = response.data;

        var mychart = echarts.init(document.querySelector('.section-two .two_b'));
        //生成差值的list
        // var i = 0
        /*while (i < l1.length) {
            l3.push(l2[i] - l1[i])
            // console.log(l1[i]);
            i++;
        }*/
        var option = {
            title: {
                text: "工作日和周末客流量分析",
                textStyle: {
                    color: 'rgba(255,255,255,0.8)',
                    fontWeight: 'normal',
                    fontSize: 18
                }
            },
            grid: {
                top: "15%",
                bottom: "8%",
                left: "8%"
            },
            // backgroundColor: "#246ab4",
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                    label: {
                        show: true
                    }
                }
            },
            legend: {
                // data: ["", "19年", "20年"],
                top: "5%",
                right: '10',
                textStyle: {
                    color: "rgba(250,250,250,0.6)",
                    fontSize: 16
                }
            },
            xAxis: {
                data: [
                    "1月",
                    "2月",
                    "3月",
                    "4月",
                    "5月",
                    "6月"
                ],
                axisLine: {
                    show: true, //隐藏X轴轴线
                    lineStyle: {
                        color: '#26D9FF',
                        width: 2
                    }
                },
                axisTick: {
                    show: true //隐藏X轴刻度
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(250,250,250,0.6)", //X轴文字颜色
                        fontSize: 16
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ["rgba(250,250,250,0.1)", "rgba(250,250,250,0)"]
                    }
                }
            },
            yAxis: [{
                type: "value",
                /*name: "亿元",*/
                nameTextStyle: {
                    color: "#ebf8ac",
                    fontSize: 16
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: true
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#26D9FF',
                        width: 2
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(250,250,250,0.6)",
                        fontSize: 16
                    }
                },

            },
                {
                    type: "value",
                    /*name: "同比",*/
                    nameTextStyle: {
                        color: "#ebf8ac",
                        fontSize: 16
                    },
                    position: "right",
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        formatter: "{value} %", //右侧Y轴文字显示
                        textStyle: {
                            color: "rgba(250,250,250,0.6)",
                            fontSize: 16
                        }
                    }
                }
            ],
            series: [
                /*{
                    name: "与去年同月差值",
                    type: "line",
                    yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                    smooth: true, //平滑曲线显示
                    showAllSymbol: true, //显示所有图形。
                    symbol: "circle", //标记的图形为实心圆
                    symbolSize: 8, //标记的大小
                    itemStyle: {
                        //折线拐点标志的样式
                        color: "#1045A0",
                        borderColor: "#3D7EEB",
                        width: 2,
                        shadowColor: "#3D7EEB",
                        shadowBlur: 4
                    },
                    lineStyle: {
                        color: "#3D7EEB",
                        width: 2,
                        shadowColor: "#3D7EEB",
                        shadowBlur: 4
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(61,126,235, 0.5)"
                        },
                            {
                                offset: 1,
                                color: "rgba(61,126,235, 0)"
                            }
                        ])
                    },
                    data: l3
                },*/
                {
                    name: "工作日",
                    type: "bar",
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(61,126,235, 1)"
                            },
                                {
                                    offset: 1,
                                    color: "rgba(61,126,235, 0)"
                                }
                            ]),
                            borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(160,196,225, 1)"
                            },
                                {
                                    offset: 1,
                                    color: "rgba(61,126,235, 1)"
                                }
                            ]),
                            borderWidth: 2
                        }
                    },
                    data: l1
                },
                {
                    name: "周末",
                    type: "bar",
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(15,197,243,1)'
                            }, {offset: 1, color: 'rgba(15,197,243,0)'}]),
                            borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(180,240,255,1)'
                            }, {offset: 1, color: 'rgba(15,197,243,1)'}]),
                            borderWidth: 2
                        }
                    },
                    data: l2
                },
                {
                    name: "节假日",
                    type: "bar",
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(114,134,142)'
                            }, {offset: 1, color: 'rgba(15,197,243,0)'}]),
                            borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(180,240,255,1)'
                            }, {offset: 1, color: 'rgb(132,161,163)'}]),
                            borderWidth: 2
                        }
                    },
                    data: l3
                },

            ]
        };
        mychart.setOption(option);
        //让图表跟随屏幕自适应大小
        window.addEventListener("resize", function () {
            mychart.resize();
        })
    })
})();

//c题图:单站点出/入客流量
(function () {
    $.getJSON('http://127.0.0.1:5555/data_c', function (response) {
        var mychart = echarts.init(document.querySelector('.section-one .one_c'));
        var SD1 = response[0];
        var SD2 = response[1];
        //x轴
        /*    var xData = function () {
                var data = [];
                for (var i = 1; i < 31; i++) {
                    data.push("站点" + i);
                }
                return data;
            }();*/

        xData = StationList;

        /*var xData = function () {
            var data = []
            for (var i = 1; i < StationList.length; i++) {
                data.push("站点" + StationList[i])
            }
            return data;
        }();*/
        // console.log(xData);

        var option = {
            // backgroundColor: "#1a1835",
            title: {
                text: "单站点出/入客流量",
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 18,
                    color: 'rgba(255,255,255,0.8)'
                },
                left: '8%',
                // top: '0%'
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                    textStyle: {
                        color: "#fff"
                    }
                },
            },
            grid: {
                borderWidth: 0,
                top: '5%',
                bottom: '8%',
                left: '5%',
                right: '10%',
                textStyle: {
                    color: "#ffffff"
                }
            },
            legend: {
                x: '46%',
                top: '11%',
                textStyle: {
                    color: '#ffffff',
                },
                data: ['进站', '出站']
            },
            calculable: true,
            xAxis: [{
                type: "category",
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.7)",
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                data: xData,
            }],
            yAxis: [{
                type: "value",
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.7)",
                    }
                },
                min: 4000,
                // min: 0,
                max: 7000,
                // splitNumber:2000

            }],
            dataZoom: [{
                show: true,
                height: 30,
                xAxisIndex: [0],
                bottom: 30,

                "start": 10,
                "end": 80,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                    color: "#5B3AAE",
                },
                textStyle: {
                    color: "rgba(204,187,225,0.5)",
                },
                fillerColor: "rgba(67,55,160,0.4)",
                borderColor: "rgba(204,187,225,0.5)",

            }, {
                type: "inside",
                show: true,
                height: 15,
                start: 1,
                end: 35
            }]
            ,
            series: [{
                name: "进站",
                type: "line",
                symbolSize: 10,
                symbol: 'circle',
                itemStyle: {
                    color: "#6f7de3",
                },
                markPoint: {
                    label: {
                        normal: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    data: [{
                        type: 'max',
                        name: '最大值',

                    }, {
                        type: 'min',
                        name: '最小值'
                    }]
                },
                data: SD1, smooth: true,
            }, {
                name: "出站",
                type: "line",
                symbolSize: 10,
                symbol: 'circle',
                itemStyle: {
                    color: "#c257F6",
                },
                markPoint: {
                    label: {
                        normal: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    data: [{
                        type: 'max',
                        name: '最大值',

                    }, {
                        type: 'min',
                        name: '最小值'
                    }]
                },
                data: SD2, smooth: true,
            },]
        }
        mychart.setOption(option);
        //让图表跟随屏幕自适应大小
        window.addEventListener("resize", function () {
            mychart.resize();
        })
        $(".section-one .Data_controler").on("click", "a", function () {
            // alert("1");
            //查看索引号
            // console.log("序列   " + $(this).index());
            //StationName中的线路名称
            var testdata = LineList[$(this).index()];
            // console.log(testdata);
            option.series[0].data = response[$(this).index()];
            option.series[1].data = response[$(this).index() + 1];
            // console.log(SD1);
            // console.log(SD2);
            //需要重新渲染
            mychart.setOption(option);
        });
    })
})();

//d题目
(function () {
    $.getJSON('http://127.0.0.1:5555/data_d', function (response) {
        console.log(response.data2);
        // data1 = response.data;

        var mychart = echarts.init(document.querySelector('.section-one .one_d'));
        var data = response.data2;
        console.log(data);
        var option = {
            title: {
                text: '用户年龄结构分布',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 18,
                    color: 'rgba(255,255,255,0.8)'
                },
                left: '0%',
                top: '0%'
            },
            tooltip: {
                trigger: 'item',
                textStyle: {
                    fontSize: 18
                }
            },
            legend: {
                top: '5%',
                // left: 'center',
                right: '5%',
                textStyle: {
                    color: 'white',
                }
            },
            series: [
                {
                    // name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '75%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 30,
                        // borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        //控制圆的中间文字大小样式
                        label: {
                            show: true,
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: data,
                }
            ]
        };
        mychart.setOption(option);
        //让图表跟随屏幕自适应大小
        window.addEventListener("resize", function () {
            mychart.resize();
        })
    })
})();

//第二页的e题目(热力图)
(function () {
    var mychart = echarts.init(document.querySelector('.section-two .two_e'));
    var hours = StationList2;

    var days = ['6am', '12am', '14pm', '16pm', '18pm', '20pm', '22pm'];

    var data = [
        [0, 0, 5],
        [0, 1, 1],
        [0, 2, 0],
        [0, 3, 0],
        [0, 4, 0],
        [0, 5, 0],
        [0, 6, 0],
        [0, 7, 0],
        [0, 8, 0],
        [0, 9, 0],
        [0, 10, 0],
        [0, 11, 2],
        [0, 12, 4],
        [0, 13, 1],
        [0, 14, 1],
        [0, 15, 3],
        [0, 16, 4],
        [0, 17, 6],
        [0, 18, 4],
        [0, 19, 4],
        [0, 20, 3],
        [0, 21, 3],
        [0, 22, 2],
        [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]
    ];
    var data2 = [[1, 5, 9], [5, 4, 1], [1, 7, 9], [10, 7, 2], [4, 3, 9], [4, 1, 5], [1, 5, 5], [8, 1, 10], [8, 5, 8], [1, 8, 8], [6, 5, 8], [6, 9, 2], [1, 8, 4], [7, 4, 1], [2, 2, 9], [1, 3, 1], [9, 8, 10], [3, 6, 10], [5, 6, 10], [6, 10, 6], [3, 4, 7], [1, 1, 7], [10, 9, 1], [3, 8, 7], [5, 4, 2], [9, 2, 8], [6, 7, 1], [9, 7, 1], [7, 4, 4], [1, 3, 5], [3, 3, 8], [3, 2, 7], [10, 10, 7], [10, 7, 6], [8, 9, 7], [7, 9, 3], [4, 10, 6], [2, 4, 1], [3, 3, 9], [5, 2, 7], [2, 4, 4], [4, 3, 3], [3, 10, 7], [5, 9, 2], [3, 4, 8], [1, 4, 8], [4, 8, 8], [6, 1, 5], [5, 7, 6], [6, 8, 3], [2, 10, 10], [3, 5, 1], [2, 4, 1], [9, 8, 3], [4, 6, 1], [9, 8, 10], [5, 6, 7], [4, 9, 1], [2, 10, 6], [1, 1, 3], [3, 9, 2], [7, 8, 3], [4, 9, 1], [2, 9, 1], [7, 1, 5], [6, 1, 9], [2, 4, 1], [6, 8, 2], [10, 8, 1], [9, 2, 3], [3, 2, 10], [4, 10, 9], [6, 7, 5], [1, 3, 5], [2, 8, 1], [4, 5, 4], [5, 3, 8], [2, 5, 4], [9, 5, 6], [7, 2, 7], [9, 7, 5], [6, 1, 3], [8, 1, 8], [8, 1, 8], [4, 10, 8], [8, 7, 8], [7, 7, 8], [5, 3, 6], [4, 8, 3], [2, 1, 1], [4, 3, 9], [2, 5, 4], [3, 6, 8], [1, 4, 3], [7, 8, 2], [8, 5, 10], [6, 6, 5], [5, 8, 9], [10, 9, 8], [1, 7, 4], [5, 1, 6], [10, 9, 7], [4, 6, 8], [1, 3, 2], [2, 7, 9], [1, 3, 8], [3, 7, 1], [7, 4, 9], [5, 6, 9], [2, 8, 2], [9, 3, 8], [5, 7, 2]]


    data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });
    // console.log(data);

    option = {
        title: {
            text: '热力图',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: 'rgba(255,255,255,0.8)'
            },

        },
        tooltip: {
            position: 'top'
        }

        , dataZoom: [
            {
                type: 'slider',
                show: true,
                start: 0, //数据窗口范围的起始百分比
                end: 100,//数据窗口范围的结束百分比
                handleSize: 8,
                backgroundColor: "rgba(73,70,70,0.1)",//组件的背景颜色
                fillerColor: "rgba(255, 127, 80,0.6)",//选中范围的填充颜色
                startValue: 110,                           //数据窗口范围的起始数值
                endValue: 62,                            //数据窗口范围的结束数值
                zoomOnMouseWheel: true,                   //如何触发缩放。可选值为：true：表示不按任何功能键，鼠标滚轮能触发缩放。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标滚轮能触发缩放。'ctrl'：表示按住 ctrl 和鼠标滚轮能触发缩放。'alt'：表示按住 alt 和鼠标滚轮能触发缩放。
                moveOnMouseMove: true,                    //如何触发数据窗口平移。true：表示不按任何功能键，鼠标移动能触发数据窗口平移。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标移动能触发数据窗口平移。'ctrl'：表示按住 ctrl 和鼠标移动能触发数据窗口平移。'alt'：表示按住 alt 和鼠标移动能触发数据窗口平移。
                textStyle: {
                    color: 'rgba(255,255,255,0.8)'
                }
            },
            {
                type: 'inside',
                start: 0,
                end: 50,
                startValue: 10
            },
            /* {
                 type: 'slider',
                 show: true,
                 yAxisIndex: 0,
                 filterMode: 'empty',
                 width: 12,
                 height: '70%',
                 handleSize: 8,
                 showDataShadow: false,
                 left: '93%'
             }*/
        ]
        ,
        grid: {
            // height: '60%',
            top: '10%',
            bottom: '25%',
            left: '5%',
            right: '3%'
        },
        xAxis: {
            type: 'category',
            data: hours,
            splitArea: {
                show: true
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,0.8)'
                }
            }
        },
        yAxis: {
            type: 'category',
            data: days,
            splitArea: {
                show: true
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,0.8)'
                }
            }
        },
        visualMap: {
            min: 0,
            max: 10,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '10%',
            textStyle: {
                color: 'rgba(255,255,255,0.8)'
            }


        },
        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                show: true
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    mychart.setOption(option);
    //让图表跟随屏幕自适应大小
    window.addEventListener("resize", function () {
        mychart.resize();
    })
})();

//g题目:线路断面(按站点)流量分析
(function () {
    var mychart = echarts.init(document.querySelector('.section-two .two_g'));
    var xData = ['1号线', '2号线', '3号线', '4号线', '5号线', '10号线', '11号线', '12号线']
    // var lineData = [100, 100, 100, 100, 100, 100, 100]
    var lastYearData = [3, 20, 62, 34, 55, 65, 33,62];
    var thisYearData = [11, 38, 23, 39, 66, 66, 79,52];
    var timeLineData = [1];
    let legend = ['出站', '入站'];
    let textColor = "#fff";
    let lineColor = "rgba(255,255,255,0.2)";
    let colors = [{
        borderColor: "rgba(227,161,96,1)",
        start: "rgba(227,161,96,0.8)",
        end: "rgba(227,161,96,0.3)"
    },
        {
            borderColor: "rgba(0,222,255,1)",
            start: "rgba(0,222,255,0.3)",
            end: "rgba(0,222,255,0.8)"
        },
    ];
    let borderData = [];
    let scale = 2;
    borderData = xData.map(item => {
        return scale;
    });
    var option = {
        baseOption: {
            title: {
                text: '线路断面(按站点)流量分析',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 18,
                    color: 'rgba(255,255,255,0.8)'
                },

            },
            // backgroundColor: background,
            timeline: {
                show: false,
                top: 0,
                data: []
            },
            legend: {
                top: '5%',
                right: '5%',
                itemWidth: 20,
                itemHeight: 5,
                // itemGap: 343,
                icon: 'horizontal',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 20,
                },
                data: legend
            },
            grid: [{
                show: false,
                left: '5%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }, {
                show: false,
                left: '51%',
                top: '10%',
                bottom: '8%',
                width: '0%'
            }, {
                show: false,
                right: '2%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }],
            xAxis: [{
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: textColor
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
            }, {
                gridIndex: 1,
                show: false
            }, {
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: textColor
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
            }],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },

                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: xData
            }, {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    padding: [30, 0, 0, 0],
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 20
                    },
                    align: "center"

                },
                data: xData.map(function (value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center'
                        }
                    }
                })
            }, {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false

                },
                data: xData
            }],
            series: []

        },
        options: []
    }

    option.baseOption.timeline.data.push(timeLineData[0])
    option.options.push({
        series: [{
            name: "出站",
            type: "bar",
            barWidth: 25,
            stack: "1",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: colors[0].start
                    },
                        {
                            offset: 1,
                            color: colors[0].end
                        }
                    ]),
                }
            },
            label: {
                normal: {
                    show: false,
                }
            },
            data: lastYearData,
            animationEasing: "elasticOut"
        },
            {
                name: "出站",
                type: "bar",
                barWidth: 25,
                stack: "1",
                itemStyle: {
                    normal: {
                        color: colors[0].borderColor

                    }
                },
                data: borderData
            },
            {
                name: "入站",
                type: "bar",
                stack: "2",
                barWidth: 25,
                xAxisIndex: 2,
                yAxisIndex: 2,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: colors[1].start
                        },
                            {
                                offset: 1,
                                color: colors[1].end
                            }
                        ]),
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: thisYearData,
                animationEasing: "elasticOut"
            },
            {
                name: "入站",
                type: "bar",
                xAxisIndex: 2,
                yAxisIndex: 2,
                barWidth: 25,
                stack: "2",
                itemStyle: {
                    normal: {
                        color: colors[1].borderColor

                    }
                },
                data: borderData
            },
        ]
    });

    mychart.setOption(option);
    //让图表跟随屏幕自适应大小
    window.addEventListener("resize", function () {
        mychart.resize();
    })
})();


//拓补图
(function () {
    var mychart = echarts.init(document.querySelector('.section-three .three_topology'));
    var data = [
        //五号线
        {
            name: "10Sta",

            symbolSize: 0.1,
            value: [150.0, 350.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#00fff7",
                position: 'bottom',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#157eff"
                    },
                        {
                            offset: 1,
                            color: "#35c2ff"
                        }
                    ])
                }
            }
        },
        {
            name: "16Sta",

            symbolSize: 0.1,
            value: [250.0, 350.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#00fff7",
                position: 'bottom',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#157eff"
                    },
                        {
                            offset: 1,
                            color: "#35c2ff"
                        }
                    ])
                }
            }
        },
        {
            name: "37Sta",

            symbolSize: 0.1,
            value: [350.0, 350.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#00fff7",
                position: 'bottom',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#157eff"
                    },
                        {
                            offset: 1,
                            color: "#35c2ff"
                        }
                    ])
                }
            }
        },
        {
            name: "43Sta",

            symbolSize: 0.1,
            value: [450.0, 450.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#00fff7",
                position: 'bottom',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#157eff"
                    },
                        {
                            offset: 1,
                            color: "#35c2ff"
                        }
                    ])
                }
            }
        },
        {
            name: "54Sta",

            symbolSize: 0.1,
            value: [550.0, 550.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#00fff7",
                position: 'bottom',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#157eff"
                    },
                        {
                            offset: 1,
                            color: "#35c2ff"
                        }
                    ])
                }
            }
        },
        {
            name: "69Sta",

            symbolSize: 0.1,
            value: [550.0, 550.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#00fff7",
                position: 'bottom',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#157eff"
                    },
                        {
                            offset: 1,
                            color: "#35c2ff"
                        }
                    ])
                }
            }
        },
        {
            name: "96Sta",

            symbolSize: 0.1,
            value: [650.0, 650.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#00fff7",
                position: 'bottom',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#157eff"
                    },
                        {
                            offset: 1,
                            color: "#35c2ff"
                        }
                    ])
                }
            }
        },
        {
            name: "132Sta",

            symbolSize: 0.1,
            value: [800.0, 800.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#00fff7",
                position: 'bottom',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#157eff"
                    },
                        {
                            offset: 1,
                            color: "#35c2ff"
                        }
                    ])
                }
            }
        },

        //十二号线
        {
            name: "17Sta",

            symbolSize: 0.1,
            value: [900.0, 1000.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'left',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "26Sta",
            tooltip: {
                formatter: "{b}: 19999<br />"
                // show: true
            },
            symbolSize: 0.1,
            value: [900.0, 1050.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'right',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "31Sta",

            symbolSize: 0.1,
            value: [900.0, 1100.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'left',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "32Sta",

            symbolSize: 0.1,
            value: [900.0, 1150.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'right',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "60Sta",

            symbolSize: 0.1,
            value: [900.0, 1200.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'left',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "72Sta",

            symbolSize: 0.1,
            value: [900.0, 1250.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'right',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "73Sta",

            symbolSize: 0.1,
            value: [900.0, 1300.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'left',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "90Sta",

            symbolSize: 0.1,
            value: [900.0, 1350.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'right',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "91Sta",

            symbolSize: 0.1,
            value: [900.0, 1400.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'left',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "92Sta",

            symbolSize: 0.1,
            value: [900.0, 1450.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'right',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "93Sta",

            symbolSize: 0.1,
            value: [900.0, 1500.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'left',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "95Sta",

            symbolSize: 0.1,
            value: [900.0, 1550.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'right',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "101Sta",

            symbolSize: 0.1,
            value: [900.0, 1600.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'left',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "116Sta",

            symbolSize: 0.1,
            value: [900.0, 1650.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'right',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "136Sta",

            symbolSize: 0.1,
            value: [900.0, 1700.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'left',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "137Sta",

            symbolSize: 0.1,
            value: [900.0, 1750.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'right',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },
        {
            name: "148Sta",

            symbolSize: 0.1,
            value: [900.0, 1800.0],
            x: 800,
            y: 400,
            fixed: true,
            // draggable: false,
            category: 1,
            label: {
                color: "#c6bb0b",
                position: 'left',
                show: true,
                fontSize: 12,
                fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#f7ff15"
                    },
                        {
                            offset: 1,
                            color: "#8aa010"
                        }
                    ])
                }
            }
        },

        //十号线
        {
            name: "2Sta ",

            symbolSize: 0.1,
            value: [350, 450],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {
                color: "#6310c2",
                position: 'left', show: true, fontSize: 12, fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "4Sta ",

            symbolSize: 0.1,
            value: [350, 513.1578],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "6Sta ",

            symbolSize: 0.1,
            value: [350, 594.7366999999999],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "7Sta ",

            symbolSize: 0.1,
            value: [350, 676.3155999999999],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "8Sta ",

            symbolSize: 0.1,
            value: [350, 757.8944999999999],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "75Sta ",

            symbolSize: 0.1,
            value: [350, 839.4733999999999],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "85Sta ",

            symbolSize: 0.1,
            value: [350, 921.0522999999998],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "87Sta ",

            symbolSize: 0.1,
            value: [350, 1002.6311999999998],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "88Sta ",

            symbolSize: 0.1,
            value: [350, 1084.2100999999998],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "94Sta ",

            symbolSize: 0.1,
            value: [350, 1165.7889999999998],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "102Sta ",

            symbolSize: 0.1,
            value: [350, 1247.3678999999997],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "103Sta ",

            symbolSize: 0.1,
            value: [350, 1328.9467999999997],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "114Sta ",

            symbolSize: 0.1,
            value: [350, 1410.5256999999997],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "134Sta ",

            symbolSize: 0.1,
            value: [350, 1492.1045999999997],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "135Sta ",

            symbolSize: 0.1,
            value: [350, 1573.6834999999996],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "145Sta ",

            symbolSize: 0.1,
            value: [350, 1655.2623999999996],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "157Sta ",

            symbolSize: 0.1,
            value: [350, 1736.8412999999996],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "160Sta ",

            symbolSize: 0.1,
            value: [350, 1818.4201999999996],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },
        {
            name: "168Sta ",

            symbolSize: 0.1,
            value: [350, 1899.9990999999995],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#6310c2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#5122bf"
                    }, {offset: 1, color: "#382c65"}])
                }
            }
        },

        //4号线
        {
            name: "19Sta ",

            symbolSize: 0.1,
            value: [1600.14, 1500.85],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {
                color: "#B22222",
                position: 'right', show: true, fontSize: 12, fontWeight: 1000
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FD2F2F"
                    }, {offset: 1, color: "#FF582F"}])
                }
            }
        },
        {
            name: "38Sta ",

            symbolSize: 0.1,
            value: [1714.2800000000002, 1605.6999999999998],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B22222", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FD2F2F"
                    }, {offset: 1, color: "#FF582F"}])
                }
            }
        },
        {
            name: "58Sta ",

            symbolSize: 0.1,
            value: [1771.4200000000003, 1658.5499999999997],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B22222", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FD2F2F"
                    }, {offset: 1, color: "#FF582F"}])
                }
            }
        },
        {
            name: "59Sta ",

            symbolSize: 0.1,
            value: [1828.5600000000004, 1711.3999999999996],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B22222", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FD2F2F"
                    }, {offset: 1, color: "#FF582F"}])
                }
            }
        },
        {
            name: "62Sta ",

            symbolSize: 0.1,
            value: [1885.7000000000005, 1764.2499999999995],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B22222", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FD2F2F"
                    }, {offset: 1, color: "#FF582F"}])
                }
            }
        },
        {
            name: "84Sta ",

            symbolSize: 0.1,
            value: [1942.8400000000006, 1817.0999999999995],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B22222", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FD2F2F"
                    }, {offset: 1, color: "#FF582F"}])
                }
            }
        },
        {
            name: "165Sta ",

            symbolSize: 0.1,
            value: [1999.9800000000007, 1869.9499999999994],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B22222", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FD2F2F"
                    }, {offset: 1, color: "#FF582F"}])
                }
            }
        },


        //一号线
        {
            name: "1Sta ",

            symbolSize: 0.1,
            value: [270, 1800],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "34Sta ",

            symbolSize: 0.1,
            value: [431, 1800],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "49Sta ",

            symbolSize: 0.1,
            value: [592, 1800],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "64Sta ",

            symbolSize: 0.1,
            value: [753, 1800],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "65Sta ",

            symbolSize: 0.1,
            value: [914, 1800],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "74Sta ",

            symbolSize: 0.1,
            value: [1075, 1800],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "80Sta ",

            symbolSize: 0.1,
            value: [1236, 1800],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "83Sta ",

            symbolSize: 0.1,
            value: [1397, 1800],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "89Sta ",

            symbolSize: 0.1,
            value: [1558, 1800],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "97Sta ",

            symbolSize: 0.1,
            value: [1719, 1800],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "106Sta ",

            symbolSize: 0.1,
            value: [1900, 1800],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'top', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "107Sta ",

            symbolSize: 0.1,
            value: [1900, 1656],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "108Sta ",

            symbolSize: 0.1,
            value: [1900, 1512],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "110Sta ",

            symbolSize: 0.1,
            value: [1900, 1368],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "128Sta ",

            symbolSize: 0.1,
            value: [1900, 1224],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "149Sta ",

            symbolSize: 0.1,
            value: [1900, 1080],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "150Sta ",

            symbolSize: 0.1,
            value: [1900, 936],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "154Sta ",

            symbolSize: 0.1,
            value: [1900, 792],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },
        {
            name: "159Sta ",

            symbolSize: 0.1,
            value: [1900, 648],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00B2B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00FEFE"
                    }, {offset: 1, color: "#00BBFF"}])
                }
            }
        },

        //十一号线


        {
            name: "3Sta ",

            symbolSize: 0.1,
            value: [1300, 1800],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'top', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "13Sta ",

            symbolSize: 0.1,
            value: [1300, 1738],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "15Sta ",

            symbolSize: 0.1,
            value: [1300, 1676],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "20Sta ",

            symbolSize: 0.1,
            value: [1300, 1614],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "23Sta ",

            symbolSize: 0.1,
            value: [1300, 1552],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "25Sta ",

            symbolSize: 0.1,
            value: [1300, 1490],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "28Sta ",

            symbolSize: 0.1,
            value: [1300, 1428],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "36Sta ",

            symbolSize: 0.1,
            value: [1300, 1366],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "45Sta ",

            symbolSize: 0.1,
            value: [1300, 1304],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "46Sta ",

            symbolSize: 0.1,
            value: [1300, 1242],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "55Sta ",

            symbolSize: 0.1,
            value: [1300, 1180],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "56Sta ",

            symbolSize: 0.1,
            value: [1300, 1118],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "63Sta ",

            symbolSize: 0.1,
            value: [1300, 1056],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "70Sta ",

            symbolSize: 0.1,
            value: [1300, 994],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "77Sta ",

            symbolSize: 0.1,
            value: [1300, 932],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "82Sta ",

            symbolSize: 0.1,
            value: [1300, 870],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "86Sta ",

            symbolSize: 0.1,
            value: [1300, 808],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "99Sta ",

            symbolSize: 0.1,
            value: [1300, 746],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "111Sta ",

            symbolSize: 0.1,
            value: [1300, 684],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "115Sta ",

            symbolSize: 0.1,
            value: [1300, 622],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "118Sta ",

            symbolSize: 0.1,
            value: [1300, 560],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "120Sta ",

            symbolSize: 0.1,
            value: [1300, 500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        },

        {
            name: "122Sta ",

            symbolSize: 0.1,
            value: [1360, 440],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "124Sta ",

            symbolSize: 0.1,
            value: [1420, 380],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "130Sta ",

            symbolSize: 0.1,
            value: [1480, 320],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "140Sta ",

            symbolSize: 0.1,
            value: [1540, 260],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "146Sta ",

            symbolSize: 0.1,
            value: [1600, 200],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'left', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        },
        {
            name: "152Sta ",

            symbolSize: 0.1,
            value: [1700, 200],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'top', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "162Sta ",

            symbolSize: 0.1,
            value: [1750, 200],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "164Sta ",

            symbolSize: 0.1,
            value: [1800, 200],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'top', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        }, {
            name: "166Sta ",

            symbolSize: 0.1,
            value: [1900, 200],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#FF4500", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FF6700"
                    }, {offset: 1, color: "#FF7C24"}])
                }
            }
        },


        //2号线:
        {
            name: "9Sta ",

            symbolSize: 0.1,
            value: [500, 500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        },
        {
            name: "18Sta ",

            symbolSize: 0.1,
            value: [720, 500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'left', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "24Sta ",

            symbolSize: 0.1,
            value: [940, 500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "27Sta ",

            symbolSize: 0.1,
            value: [1160, 500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "47Sta ",

            symbolSize: 0.1,
            value: [1380, 500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "48Sta ",

            symbolSize: 0.1,
            value: [1600, 500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "51Sta ",

            symbolSize: 0.1,
            value: [1600, 750],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        },
        {
            name: "52Sta ",

            symbolSize: 0.1,
            value: [1600, 900],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "53Sta ",

            symbolSize: 0.1,
            value: [1600, 1050],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "57Sta ",

            symbolSize: 0.1,
            value: [1600, 1200],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "68Sta ",

            symbolSize: 0.1,
            value: [1600, 1350],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "71Sta ",

            symbolSize: 0.1,
            value: [1600, 1500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "76Sta ",

            symbolSize: 0.1,
            value: [1450, 1500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        },
        {
            name: "78Sta ",

            symbolSize: 0.1,
            value: [1300, 1500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "79Sta ",

            symbolSize: 0.1,
            value: [1150, 1500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "81Sta ",

            symbolSize: 0.1,
            value: [1000, 1500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "105Sta ",

            symbolSize: 0.1,
            value: [850, 1500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "123Sta ",

            symbolSize: 0.1,
            value: [700, 1500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        },
        {
            name: "127Sta ",

            symbolSize: 0.1,
            value: [500, 1500],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        },

        {
            name: "129Sta ",

            symbolSize: 0.1,
            value: [500, 1300],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "139Sta ",

            symbolSize: 0.1,
            value: [500, 1100],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "151Sta ",

            symbolSize: 0.1,
            value: [500, 900],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        }, {
            name: "163Sta ",

            symbolSize: 0.1,
            value: [500, 700],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#00FFFF", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#00B2B2"
                    }, {offset: 1, color: "#00DDFF"}])
                }
            }
        },


        //3号线的点:
        {
            name: "11Sta ",

            symbolSize: 0.1,
            value: [150, 1200],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "12Sta ",

            symbolSize: 0.1,
            value: [237.5, 1140],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "21Sta ",

            symbolSize: 0.1,
            value: [325.0, 1080],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "22Sta ",

            symbolSize: 0.1,
            value: [412.5, 1020],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "29Sta ",

            symbolSize: 0.1,
            value: [500.0, 980],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        },
        {
            name: "30Sta ",

            symbolSize: 0.1,
            value: [594.117, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'top', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            symbolSize: 0.1,
            value: [688.2339999999999, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "35Sta ",

            symbolSize: 0.1,
            value: [782.3509999999999, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'top', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "39Sta ",

            symbolSize: 0.1,
            value: [876.4679999999998, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "40Sta ",

            symbolSize: 0.1,
            value: [970.5849999999998, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'top', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "41Sta ",

            symbolSize: 0.1,
            value: [1064.7019999999998, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "42Sta ",

            symbolSize: 0.1,
            value: [1158.8189999999997, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'top', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "44Sta ",

            symbolSize: 0.1,
            value: [1252.9359999999997, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "50Sta ",

            symbolSize: 0.1,
            value: [1347.0529999999997, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'top', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "61Sta ",

            symbolSize: 0.1,
            value: [1441.1699999999996, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "66Sta ",

            symbolSize: 0.1,
            value: [1535.2869999999996, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'top', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "67Sta ",

            symbolSize: 0.1,
            value: [1629.4039999999995, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "100Sta ",

            symbolSize: 0.1,
            value: [1723.5209999999995, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'top', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "109Sta ",

            symbolSize: 0.1,
            value: [1817.6379999999995, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "112Sta ",

            symbolSize: 0.1,
            value: [1911.7549999999994, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'top', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "113Sta ",

            symbolSize: 0.1,
            value: [2005.8719999999994, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'bottom', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "117Sta ",

            symbolSize: 0.1,
            value: [2099.9889999999996, 990],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'top', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "119Sta ",

            symbolSize: 0.1,
            value: [2099.9889999999996, 1050],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        },
        {
            name: "121Sta ",
            symbolSize: 0.1,
            value: [2100, 700],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "125Sta ",
            symbolSize: 0.1,
            value: [2100, 770],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'left', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "126Sta ",
            symbolSize: 0.1,
            value: [2100, 840],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "131Sta ",
            symbolSize: 0.1,
            value: [2100, 910],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'left', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "133Sta ",
            symbolSize: 0.1,
            value: [2100, 980],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "138Sta ",
            symbolSize: 0.1,
            value: [2100, 1050],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'left', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "141Sta ",
            symbolSize: 0.1,
            value: [2100, 1120],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "142Sta ",
            symbolSize: 0.1,
            value: [2100, 1190],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'left', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "143Sta ",
            symbolSize: 0.1,
            value: [2100, 1260],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "144Sta ",
            symbolSize: 0.1,
            value: [2100, 1330],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'left', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "147Sta ",
            symbolSize: 0.1,
            value: [2100, 1400],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "153Sta ",
            symbolSize: 0.1,
            value: [2100, 1470],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'left', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "156Sta ",
            symbolSize: 0.1,
            value: [2100, 1540],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "158Sta ",
            symbolSize: 0.1,
            value: [2100, 1610],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'left', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "161Sta ",
            symbolSize: 0.1,
            value: [2100, 1680],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'right', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        }, {
            name: "167Sta ",
            symbolSize: 0.1,
            value: [2100, 1750],
            x: 800,
            y: 400,
            fixed: true,
            category: 1,
            label: {color: "#B200B2", position: 'left', show: true, fontSize: 12, fontWeight: 1000},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#FE00FE"
                    }, {offset: 1, color: "#CB00CB"}])
                }
            }
        },
    ]

    var option = ({
        title: {
            text: '地铁路线拓扑图',
            textStyle: {
                color: 'rgba(255,255,255,0.8)',
                fontSize: 16,
                fontWeight: 'normal',

            },
            x: 'center',
            top: 10,
            left: 10
        },
        //不设置背景颜色就是透明色
        // backgroundColor: 'rgb(2,2,2)',
        xAxis: {
            //显示坐标轴
            show: false,
            min: 50,
            max: 2300,
            // type: "value",
            //开启x轴坐标
            axisPointer: {
                show: false
            },
        },
        yAxis: {
            //显示坐标轴
            show: false,
            min: 0,
            max: 2000,
            //   type: "value",
            //开启y轴坐标
            axisPointer: {
                show: false
            },
        },
        grid: {
            bottom: '1%',
            top: '1%',
            left: '1%'
        },
        tooltip: {
            // trigger: 'item'
        },
        //  legend: {
        //     show: false
        //  },
        series: [
            {
                type: "graph",
                zlevel: 3,
                draggable: false,
                coordinateSystem: "cartesian2d", //使用二维的直角坐标系（也称笛卡尔坐标系）

                // edgeSymbolSize: [0, 8], //边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定
                // edgeLabel: {
                //   normal: {
                //     textStyle: {
                //       fontSize: 60
                //     }
                //   }
                // },
                symbol: "rect",
                symbolOffset: ["15%", 0],
                tooltip: {
                    show: false //显示提示框
                },

                label: {
                    normal: {
                        show: false,
                    }
                },
                data: data,
                links: [
                    //数据上一个点与下一个点连接
                    //五号线连接
                    {
                        source: "10Sta", target: "37Sta",
                        lineStyle: {
                            normal: {
                                color: "rgb(43,132,189)",
                            }
                        }
                    },
                    {
                        source: "37Sta", target: "132Sta",
                        lineStyle: {
                            normal: {
                                color: "rgb(8,121,194)",
                            }
                        }
                    },

                    //十二号线连接

                    {
                        source: "17Sta", target: "148Sta",
                        lineStyle: {
                            normal: {
                                color: "rgb(238,172,10)",
                            }
                        }
                    },

                    //十号线连接
                    {
                        source: "2Sta ", target: "168Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(148,0,255)",
                            }
                        }
                    },

                    //四号线连接
                    {
                        source: "19Sta ", target: "165Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(234,102,31)",
                            }
                        }
                    },

                    //一号线连接
                    {
                        source: "1Sta ", target: "106Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(19,202,219)",
                            }
                        }
                    }, {
                        source: "106Sta ", target: "159Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(19,202,219)",
                            }
                        }
                    },
                    //十一号线连接
                    {
                        source: "3Sta ", target: "120Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(232,126,9)",
                            }
                        }
                    }, {
                        source: "120Sta ", target: "146Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(232,126,9)",
                            }
                        }
                    }, {
                        source: "146Sta ", target: "166Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(232,126,9)",
                            }
                        }
                    },
                    //2号线连接
                    {
                        source: "48Sta ", target: "71Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(24,123,120)",
                            }
                        }
                    }, {
                        source: "71Sta ", target: "127Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(24,123,120)",
                            }
                        }
                    },
                    {
                        source: "127Sta ", target: "9Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(24,123,120)",
                            }
                        }
                    }, {
                        source: "9Sta ", target: "48Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(24,123,120)",
                            }
                        }
                    },

                    //3号线连接
                    {
                        source: "11Sta ", target: "29Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(158,70,248)",
                            }
                        }
                    },
                    {
                        source: "29Sta ", target: "133Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(158,70,248)",
                            }
                        }
                    },
                    {
                        source: "121Sta ", target: "161Sta ",
                        lineStyle: {
                            normal: {
                                color: "rgb(158,70,248)",
                            }
                        }
                    },


                ],
                lineStyle: {
                    normal: {
                        opacity: 0.6, //线条透明度
                        color: "#53B5EA",
                        curveness: 0, //站点间连线曲度，0表示直线
                        width: 5, //线条宽度
                    }
                }
            },
            {
                type: "lines",
                coordinateSystem: "cartesian2d",
                z: 2,
                zlevel: 7,
                animation: true,
                effect: {
                    show: true,
                    period: 5,
                    trailLength: 0.71,
                    symbolSize: 14,
                    symbol: "circle",
                    loop: true,
                    color: 'yellow'
                    //   color: "rgba(55,155,255,0.5)"
                },
                lineStyle: {
                    normal: {
                        color: "green",
                        width: 0,
                        curveness: 0  //动画线路的曲度
                    }
                },
            },
            {
                type: "effectScatter",
                scaling: 1.5,
                color: '#00FF7F',
                //该系列使用的坐标系
                coordinateSystem: "cartesian2d",
                symbolSize: function (val) {
                    return val[2] * 0.8;

                },
                data: [
                    //控制高亮点的数据
                    /*            {name: "体育西路", value: [1076.62, 982.55, 47.36]},
                                {name: "公园前", value: [733.94, 982.55, 36.56]},
                                {name: "珠江新城", value: [1076.62, 892.2, 30.89]},
                                {name: "昌岗", value: [733.94, 768.05, 27.64]},
                                {name: "客村", value: [1076.62, 768.05, 26.43]},
                                {name: "广州火车站", value: [733.94, 1118.14, 25.15]},
                                {name: "海珠广场", value: [733.94, 933.67, 18.72]},
                                {name: "嘉禾望岗", value: [898.0, 1349.8, 17.92]},
                                {name: "杨箕", value: [994.72, 982.55, 17.42]},
                                {name: "车陂南", value: [1358.46, 892.2, 16.85]},*/
                    {name: "10Sta", value: [150, 350, 13]},
                    {name: "71Sta ", value: [150, 350, 13]},


                ],
                showEffectOn: "render",
                effectType: "ripple",
                rippleEffect: {
                    period: 4,
                    scale: 4,
                    brushType: "stroke"

                },
                hoverAnimation: true
            },
            //   {
            //         type: "lines",
            //         coordinateSystem: "cartesian2d",
            //         z: 1,
            //         zlevel:7,
            //         animation: true,
            //         effect: {
            //           show: true,
            //           period: 5,
            //           trailLength: 0.71,
            //           symbolSize: 5,
            //           symbol: "circle",
            //           loop: true,
            //           color: 'yellow'
            //         //   color: "rgba(55,155,255,0.5)"
            //         },
            //         lineStyle: {
            //           normal: {
            //             // color: "green",
            //             width: 0.1,
            //             curveness: 0  //动画线路的曲度
            //           }
            //         },
            //         data: [
            //           {  //一号线
            //             coords: [[483.82, 629.86],
            //             [1076.62, 1982.55],[1040, 1080]]
            //           },
            //           {  //二号线
            //             coords: [
            //               [680, 50],
            //               [680, 1050]
            //             ]
            //           },
            //           {  //三号线
            //             coords: [
            //               [280, 350],
            //               [1040, 1080]
            //             ]
            //           }
            //         ]
            //       },
            {
                type: "lines",
                coordinateSystem: "cartesian2d",
                z: 1,
                zlevel: 7,
                animation: true,
                effect: {
                    show: true,
                    period: 5,
                    trailLength: 0.71,
                    symbolSize: 5,
                    symbol: "circle",
                    loop: true,
                    color: 'yellow'
                },
                lineStyle: {
                    normal: {
                        // color: "green",
                        width: 0.1,
                        curveness: 0  //动画线路的曲度
                    }
                },
                polyline: true,
                data: [
                    //地铁路线的基础线条

                    {
                        //二号线
                        coords: [
                            [500, 500], [1600, 500], [1600, 1500], [500, 1500], [500, 500]
                        ]
                    }
                    ,
                    {
                        //一号线
                        coords: [
                            [270, 1800], [1900, 1800], [1900, 648]
                        ]
                    },
                    {
                        //十号线
                        coords: [
                            [350, 350], [350, 1900]
                        ]
                    },
                    {
                        //五号线
                        coords: [
                            [150, 350], [350, 350], [800, 800]
                        ]
                    },
                    {
                        //三号线
                        coords: [
                            [150, 1200], [500, 990], [2100, 990], [2100, 1600]
                        ]
                    },
                    {
                        //四号线
                        coords: [
                            [1600, 1500], [2000, 1870]
                        ]
                    },
                    {
                        //十二号线
                        coords: [
                            [900, 990], [900, 1800]
                        ]
                    },
                    {
                        //十一号线
                        coords: [
                            [1300, 1800], [1300, 500], [1600, 200], [1900, 200]
                        ]
                    }
                ],
            }

        ]
    });
    mychart.setOption(option);
    // })

})();

//f题目:站点od客流量分析
(function () {

})();