import re
with open('/Users/chasemangini/Desktop/core-hood-cleaning/src/app/page.tsx', 'r') as f:
    content = f.read()
content = content.replace("import Footer from '@/components/Footer'", "import Nav from '@/components/Nav'\nimport Footer from '@/components/Footer'")
content = re.sub(r'\s*\{/\* NAV \*/\}.*?</nav>', '\n      <Nav />', content, flags=re.DOTALL)
with open('/Users/chasemangini/Desktop/core-hood-cleaning/src/app/page.tsx', 'w') as f:
    f.write(content)
print('Done!')
