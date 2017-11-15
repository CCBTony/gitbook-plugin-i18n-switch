module.exports = function(book, page) {
  const isEN = page.rawPath.includes('/en/')
  const block = `
    <script>
        function switchI18n () {
            var path = location.pathname
            if (path.indexOf('/zh_CN/') >= 0) path = path.replace('/zh_CN/', '/en/')
            else path = path.replace('/en/', '/zh_CN/')
            
            location.href = path
        }
    </script>
    
    <a class="switch-i18n" href="javascript:switchI18n()">${isEN ? '中文' : 'English'}</a>
    
  `
  page.content = block + page.content;

  // 将实体字符全部转义为中文
  let content = page.content
  const exclueds = ['<', '>']
  const matchResult = content.match(/\&\#x(\w+)\;/g)
  if (matchResult) {
    for(let i of matchResult) {
      let char = String.fromCharCode(eval('0' + i.substr(2, i.length - 3)))

      if (!exclueds.includes(char))
        content = content.replace(new RegExp(i, 'g'), char)
    }
    page.content = content
  }

  return page;
}
