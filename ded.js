var ded_word = ':ded:';

var ded_16_16_px = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QILEAAaXUns7AAAAmBJREFUKM8FwVtv2zYUAOBD8pC6Wlbk2E5Tpw1QFFj//9uKvg4rWuxxBdK3ZrnJtR1LNsXbIfd97PD74fmfv/TzL6dPLAHKnEIIzgDjzljnjJ50StGHQCxnqsJILsVAqFwx8/ocDzvJBErpnWVMeCGtzK0+YUg848A5kvcxpRjM+PR0/+s+GvPHp09e2/3rkWe5ESi4KKr6PE48pmQn5ALJ2vufd7v++O+QmuFwuzlKosf/HmxweV73ScTzfnP9lgtUKkOUKkwnBbBedarU0KwUF86mABIxNvP54eT60cqHx9WqY0piSD5RmFeVnuyyUKJeV0Wtx12BKstkWWXv7Hh53Ump2ovGc4kAQmAmZTZLgpCiQA4iWqdQGn2qC73olrU5ReA2sMCBC0ShFGLGuJwmm6kyhcAYK6pZJovdfiiLuqoazgSIMjLOKRki8j7stn1wTpUFqSyo/EzBpTi+Hn+/vARHLhDFFCiiSDJFP5lJzmbd5tYzmBKcEXu9nzXNctHpFMl7ItLnITLgkaIQgglqNjfYtnrbh1Gjc4toa2AQIy6vYL7gyDgDRMmBR864ygtO9uvnP3889bzOi3lTrd+Qwi9/f7v7/jUrMyEFAEmJyKRQ7TI/7qOqbjdrm2RWlMWHthxP/cv24/t367YwBJS33GxFjOhJy9UbOVlnTbfowqBPd3eTMeOunyJ737W8LgzIieVXNx8hr7HML9i6GvqtSCCaTs0u1PXmuO3zmxtj7Pmwk5dvPQhP5OuFTwIlm0MF5eXVtHsGSNPjvSfgDMEb8DZrO8vleRgiE7vXwRn7P9T4a+0IEj6QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTAyLTExVDE2OjAwOjI2LTA1OjAwv0IibwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wMi0xMVQxNjowMDoyNi0wNTowMM4fmtMAAAAASUVORK5CYII=';

var ded_32_32_px = 'data:image/png;base64,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';

function replace_ded_word_to_images(items, base64_image) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        
        if (item.innerHTML.indexOf(ded_word) > -1) {
            item.innerHTML = item.innerHTML.replace(ded_word, "<img src = '" + base64_image + "' />");
        }
    }
}

function ded_replace() {
    var previews = document.getElementsByClassName('nim-dialog--preview _dialog_body');
    var messages = document.getElementsByClassName('im-mess--text wall_module _im_log_body');
    
    replace_ded_word_to_images(previews, ded_16_16_px);
    replace_ded_word_to_images(messages, ded_32_32_px);
}

document.body.onload = function () {
    
    setInterval(function () {
        ded_replace();
    }, 1000);
    
    ded_replace();
    
    console.log('[Дед]: Я тут)');
};
