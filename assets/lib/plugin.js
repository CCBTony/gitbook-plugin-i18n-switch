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
  return page;
}
