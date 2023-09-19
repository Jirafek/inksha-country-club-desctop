import positions from './positions.json'

export const
    base = document => {
        // Consts
        const
            positionRelativeMouse = { x: 5, y: 5 }

        // Elements
        const
            mapTooltip = document.querySelector('.map-tooltip'),
            map = document.querySelector('.map'),
            mapControlsList = document.querySelector('.map-controls-list');

        // Logic
        const
            getTooltip = (_e, title) => {
                const tooltipTitle = mapTooltip.querySelector('h3');
                tooltipTitle.textContent = title;
                mapTooltip.style.top = `${_e.pageY + positionRelativeMouse.y - map.offsetTop + 10}px`;

                const position_x = _e.pageX + positionRelativeMouse.x;

                if (position_x + mapTooltip.clientWidth >= window.innerWidth)
                    mapTooltip.style.left = `${position_x - mapTooltip.clientWidth - 20}px`;
                else
                    mapTooltip.style.left = `${position_x}px`;
            },
            mouseMove_mapButton = _e => {
                getTooltip(_e, positions.find(elem => elem.id == _e.currentTarget.dataset.position)?.title)
            },
            mouseEnter_mapButton = _e => {
                mapTooltip.style.display = 'block';
            },
            mouseLeave_mapButton = _e => {
                mapTooltip.style.display = 'none';
            },
            init = () => {
                const mapButtons = mapControlsList.querySelectorAll('.map_button');
                mapButtons.forEach(mapButton => {
                    mapButton.addEventListener('mousemove', mouseMove_mapButton)
                    mapButton.addEventListener('mouseenter', mouseEnter_mapButton)
                    mapButton.addEventListener('mouseleave', mouseLeave_mapButton)
                })
            };
            init()
    },
    increase = document => {
        const map = document.querySelector('.map-controls');
        const preview = document.querySelector('.map-tooltip_preview')

        map.addEventListener('mousemove', e => {
            let r = e.target.getBoundingClientRect();
            let width = e.currentTarget.clientWidth;
            let height = e.currentTarget.clientHeight;

            let posX = e.pageX * 100 / width
            let posY = (e.pageY - document.querySelector('.map').offsetTop) * 100 / height

            // console.log(e.pageX, e.pageY - document.querySelector('.map').getBoundingClientRect().top)

            preview.style.background = `url(/image/map.webp) no-repeat`;
            preview.style.backgroundPosition = `calc(${posX / 1.02}% - ${posX < 50 ? -200 : 200}px) calc(${posY / 1.02}% - ${posY < 50 ? -150 : 150}px)`;
            preview.style.display = 'inline-block';
        })
    };