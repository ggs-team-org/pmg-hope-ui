const componentToolsList = (() => {
    const template = `
{{#list}}
<a href="/sc/app.aspx?app=ITQ.new.tools.tool&ToolId={{id}}" class="text-center" data-ref="popover-trigger">
    <div class="w-100" id="tool-{{id}}">
        <span class="fa-stack fa-2x">
            <i class="fa-stack-1x" style="color: white; z-index: 2;">
                {{{Icon}}}
            </i>
            <i class="fa-solid fa-square fa-stack-2x" style="color: {{icon_color}};"></i>
        </span>
    </div>
    <div>
        <h6 class="mt-2">{{Name}}</h6>
    </div>
</a>
<div class="d-none" data-ref="popover-container">
    <div data-ref="popover-title">
        <span class="fa-stack">
            <i class="fa-stack-1x" style="color: white; z-index: 2;">
                {{{Icon}}}
            </i>
            
            <i class="fa-solid fa-square fa-stack-2x" style="color: {{icon_color}};"></i>
        </span>
        {{Name}}
    </div>
    <div data-ref="popover-content">
        <div class="d-flex flex-wrap gap-2">
            {{{ToolLinksHTML}}}
        </div>
        <br/>
        <p>{{{ToolDescription}}}</p>
    </div>
</div>

{{/list}}

{{^list}}
    <div class="text-center">No tools found</div>
{{/list}}
`;
    return function ToolsList(element, store) {
        let list = [];
        let isLoading = false;

        function render(data) {
            return Mustache.render(template, {
                list
            });
        }

        function load() {
            isLoading = true;
            return WfUtil.prototype.runWorkflow2({
                name: 'ITQ.new.tools',
                variables: store.getState()
            })
                .then((data) => {
                    list = data.TableOutput;
                    element.innerHTML = render(data);
                    $(element).find('[data-ref="popover-trigger"]').popover({
                        animation: false,
                        trigger: 'hover',
                        placement: 'bottom',
                        fallbackPlacements: ['right', 'left'],
                        html: true,
                        offset: '[0, 0]',
                        sanitize: false,
                        delay: {show: 700, hide: 200},
                        container: 'body',
                        template: '<div class="popover" role="tooltip" style="max-width: 400px;"><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                        title() {
                            return $(this).next('[data-ref="popover-container"]')[0].querySelector('[data-ref="popover-title"]').cloneNode(true);
                        },
                        content() {
                            return $(this).next('[data-ref="popover-container"]')[0].querySelector('[data-ref="popover-content"]').cloneNode(true);
                        }
                    });
                    isLoading = false;
                }, () => {
                    isLoading = false;
                });
        }

        store.subscribe(() => {
            load();
        });

        load();
    }
})();

