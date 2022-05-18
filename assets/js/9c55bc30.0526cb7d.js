"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4652],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73087:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],l={title:"Upgrading from v4 to v5"},s=void 0,d={unversionedId:"upgrading-v4-to-v5",id:"version-4.5/upgrading-v4-to-v5",title:"Upgrading from v4 to v5",description:"Following sections describe (hopefully) all breaking changes, most of them might be not valid",source:"@site/versioned_docs/version-4.5/upgrading-v4-to-v5.md",sourceDirName:".",slug:"/upgrading-v4-to-v5",permalink:"/docs/4.5/upgrading-v4-to-v5",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/upgrading-v4-to-v5.md",tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1652891036,formattedLastUpdatedAt:"5/18/2022",frontMatter:{title:"Upgrading from v4 to v5"}},p={},u=[{value:"Node 14+ required",id:"node-14-required",level:2},{value:"TypeScript 4.1+ required",id:"typescript-41-required",level:2},{value:"Options parameters",id:"options-parameters",level:2},{value:"Type-safe populate parameter with dot notation",id:"type-safe-populate-parameter-with-dot-notation",level:2},{value:"Type-safe fields parameter",id:"type-safe-fields-parameter",level:2},{value:"Type-safe orderBy parameter",id:"type-safe-orderby-parameter",level:2},{value:"Removed <code>@Repository()</code> decorator",id:"removed-repository-decorator",level:2},{value:"Disallowed global identity map",id:"disallowed-global-identity-map",level:2},{value:"<code>LoadedCollection.get()</code> and <code>$</code> now return the <code>Collection</code> instance",id:"loadedcollectionget-and--now-return-the-collection-instance",level:2},{value:"Different table aliasing for select-in loading strategy and for QueryBuilder",id:"different-table-aliasing-for-select-in-loading-strategy-and-for-querybuilder",level:2},{value:"Migrations are now stored without extensions",id:"migrations-are-now-stored-without-extensions",level:2},{value:"Changes in <code>assign()</code> helper",id:"changes-in-assign-helper",level:2},{value:"<code>em.populate()</code> always return array of entities",id:"empopulate-always-return-array-of-entities",level:2},{value:"QueryBuilder is awaitable",id:"querybuilder-is-awaitable",level:2},{value:"<code>UnitOfWork.getScheduledCollectionDeletions()</code> has been removed",id:"unitofworkgetscheduledcollectiondeletions-has-been-removed",level:2},{value:"<code>populateAfterFlush</code> is enabled by default",id:"populateafterflush-is-enabled-by-default",level:2},{value:"<code>migrations.pattern</code> is removed in favour of <code>migrations.glob</code>",id:"migrationspattern-is-removed-in-favour-of-migrationsglob",level:2},{value:"Population no longer infers the where condition by default",id:"population-no-longer-infers-the-where-condition-by-default",level:2},{value:"<code>em.create()</code> respects required properties",id:"emcreate-respects-required-properties",level:2},{value:"Required properties are validated before insert",id:"required-properties-are-validated-before-insert",level:2},{value:"<code>PrimaryKeyType</code> symbol should be defined as optional",id:"primarykeytype-symbol-should-be-defined-as-optional",level:2}],m={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Following sections describe (hopefully) all breaking changes, most of them might be not valid\nfor you, like if you do not use custom ",(0,o.kt)("inlineCode",{parentName:"p"},"NamingStrategy")," implementation, you do not care about\nthe interface being changed.")),(0,o.kt)("h2",{id:"node-14-required"},"Node 14+ required"),(0,o.kt)("p",null,"Support for older node versions was dropped. "),(0,o.kt)("h2",{id:"typescript-41-required"},"TypeScript 4.1+ required"),(0,o.kt)("p",null,"Support for older TypeScript versions was dropped. "),(0,o.kt)("h2",{id:"options-parameters"},"Options parameters"),(0,o.kt)("p",null,"Previously many methods had many (often boolean) parameters, in v5 such methods are\nrefactored to use options object instead to improve readability. Some methods offered\nboth signatures - the multi parameter signatures are now removed."),(0,o.kt)("p",null,"List of such methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"em.find()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"em.findOne()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"em.findOneOrFail()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"em.findAndCount()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"em.getReference()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"em.merge()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"em.fork()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"em.begin()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"em.assign()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"em.create()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"repo.find()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"repo.findOne()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"repo.findOneOrFail()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"repo.findAndCount()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"repo.findAll()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"repo.getReference()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"repo.merge()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"collection.init()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"repo.create()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"repo.assign()"))),(0,o.kt)("p",null,"This also applies to the methods on ",(0,o.kt)("inlineCode",{parentName:"p"},"IDatabaseDriver")," interface."),(0,o.kt)("h2",{id:"type-safe-populate-parameter-with-dot-notation"},"Type-safe populate parameter with dot notation"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FindOptions.populate")," parameter is now strictly typed and supports only array of\nstrings or a boolean.\nObject way is no longer supported. To set loading strategy, use ",(0,o.kt)("inlineCode",{parentName:"p"},"FindOptions.strategy"),".\nThe return type of all such methods now returns properly typed ",(0,o.kt)("inlineCode",{parentName:"p"},"Loaded")," response. "),(0,o.kt)("h2",{id:"type-safe-fields-parameter"},"Type-safe fields parameter"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FindOptions.fields")," parameter is now strictly typed also for the dot notation."),(0,o.kt)("h2",{id:"type-safe-orderby-parameter"},"Type-safe orderBy parameter"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FindOptions.orderBy")," parameter is now strictly typed. It also allows passing an\narray of objects instead of just a single object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const books = await em.find(Book, {}, {\n  orderBy: [\n    { title: 1 },\n    { author: { name: -1 } },\n  ],\n});\n")),(0,o.kt)("h2",{id:"removed-repository-decorator"},"Removed ",(0,o.kt)("inlineCode",{parentName:"h2"},"@Repository()")," decorator"),(0,o.kt)("p",null,"The decorator was problematic as it could only work properly it the file was required\nsoon enough - before the ORM initialization, otherwise the repository would not be\nregistered at all."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"@Entity({ customRepository: () => CustomRepository })")," in the entity definition\ninstead."),(0,o.kt)("h2",{id:"disallowed-global-identity-map"},"Disallowed global identity map"),(0,o.kt)("p",null,"In v5, it is no longer possible to use the global identity map. This was a\ncommon issue that led to weird bugs, as using the global EM without request\ncontext is wrong, we always need to have a dedicated context for each request,\nso they do not interfere."),(0,o.kt)("p",null,"Now we get a validation error if we try to use the global context. We still can\ndisable this check via ",(0,o.kt)("inlineCode",{parentName:"p"},"allowGlobalContext")," configuration, or a connected\nenvironment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"MIKRO_ORM_ALLOW_GLOBAL_CONTEXT")," - this can be handy\nespecially in unit tests."),(0,o.kt)("h2",{id:"loadedcollectionget-and--now-return-the-collection-instance"},(0,o.kt)("inlineCode",{parentName:"h2"},"LoadedCollection.get()")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"$")," now return the ",(0,o.kt)("inlineCode",{parentName:"h2"},"Collection")," instance"),(0,o.kt)("p",null,"Previously those dynamically added getters returned the array copy of collection\nitems. In v5, we return the collection instance, which is also iterable and has\na ",(0,o.kt)("inlineCode",{parentName:"p"},"length")," getter and indexed access support, so it mimics the array. To get the\narray copy as before, call ",(0,o.kt)("inlineCode",{parentName:"p"},"getItems()")," as with a regular collection."),(0,o.kt)("h2",{id:"different-table-aliasing-for-select-in-loading-strategy-and-for-querybuilder"},"Different table aliasing for select-in loading strategy and for QueryBuilder"),(0,o.kt)("p",null,"Previously with select-in strategy as well as with QueryBuilder, table aliases\nwere always the letter ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," followed by unique index. In v5, we use the same\nmethod as with joined strategy - the letter is inferred from the entity name."),(0,o.kt)("p",null,"This can be breaking if you used the aliases somewhere, e.g. in custom SQL\nfragments. We can restore to the old behaviour by implementing custom naming\nstrategy, overriding the ",(0,o.kt)("inlineCode",{parentName:"p"},"aliasName")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { AbstractNamingStrategy } from '@mikro-orm/core';\n\nclass CustomNamingStrategy extends AbstractNamingStrategy {\n  aliasName(entityName: string, index: number) {\n    return 'e' + index;\n  }\n}\n")),(0,o.kt)("p",null,"Note that in v5 it is possible to use ",(0,o.kt)("inlineCode",{parentName:"p"},"expr()")," helper to access the alias name\ndynamically, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"expr(alias => `lower('${alias}.name')`)"),", which should be\nnow preferred way instead of hardcoding the aliases."),(0,o.kt)("h2",{id:"migrations-are-now-stored-without-extensions"},"Migrations are now stored without extensions"),(0,o.kt)("p",null,"Running migrations in production via node and ts-node is now handled the same.\nThis should actually not be breaking, as old format with extension is still\nsupported (e.g. they still can be rolled back), but newly logged migrations\nwill not contain the extension."),(0,o.kt)("h2",{id:"changes-in-assign-helper"},"Changes in ",(0,o.kt)("inlineCode",{parentName:"h2"},"assign()")," helper"),(0,o.kt)("p",null,"Embeddable instances are now created via ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityFactory")," and they respect the\n",(0,o.kt)("inlineCode",{parentName:"p"},"forceEntityConstructor")," configuration. Due to this we need to have EM instance\nwhen assigning to embedded properties. "),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"em.assign()")," should be preferred to get around this."),(0,o.kt)("p",null,"Deep assigning of child entities now works by default based on the presence of PKs in the payload.\nThis behaviour can be disable via updateByPrimaryKey: false in the assign options."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mergeObjects")," option is now enabled by default."),(0,o.kt)("h2",{id:"empopulate-always-return-array-of-entities"},(0,o.kt)("inlineCode",{parentName:"h2"},"em.populate()")," always return array of entities"),(0,o.kt)("p",null,"Previously it was possible to call ",(0,o.kt)("inlineCode",{parentName:"p"},"em.populate()")," with a single entity input,\nand the output would be again just a single entity."),(0,o.kt)("p",null,"Due to issues with TS 4.5, this method now always return array of entities.\nYou can use destructing if you want to have a single entity return type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const [loadedAuthor] = await em.populate(author, ...);\n")),(0,o.kt)("h2",{id:"querybuilder-is-awaitable"},"QueryBuilder is awaitable"),(0,o.kt)("p",null,"Previously awaiting of QB instance was a no-op. In v5, QB is promise-like interface,\nso we can await it. More about this in ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.5/query-builder#awaiting-the-querybuilder"},"Awaiting the QueryBuilder")," section."),(0,o.kt)("h2",{id:"unitofworkgetscheduledcollectiondeletions-has-been-removed"},(0,o.kt)("inlineCode",{parentName:"h2"},"UnitOfWork.getScheduledCollectionDeletions()")," has been removed"),(0,o.kt)("p",null,"Previously scheduled collection deletions were used for a hack when removing\n1:m collection via orphan removal might require early deletes - in case we were\nadding the same entity (but different instance), so with same PK - inserting it\nin the same unit would cause unique constraint failures."),(0,o.kt)("p",null,"Also ",(0,o.kt)("inlineCode",{parentName:"p"},"IDatabaseDriver.clearCollection()")," method is no longer present in the driver API."),(0,o.kt)("h2",{id:"populateafterflush-is-enabled-by-default"},(0,o.kt)("inlineCode",{parentName:"h2"},"populateAfterFlush")," is enabled by default"),(0,o.kt)("p",null,"After flushing a new entity, all relations are marked as populated,\njust like if the entity was loaded from the db. This aligns the serialized\noutput of ",(0,o.kt)("inlineCode",{parentName:"p"},"e.toJSON()")," of a loaded entity and just-inserted one."),(0,o.kt)("p",null,"In v4 this behaviour was disabled by default, so even after the new entity was\nflushed, the serialized form contained only FKs for its relations. We can opt in\nto this old behaviour via ",(0,o.kt)("inlineCode",{parentName:"p"},"populateAfterFlush: false"),"."),(0,o.kt)("h2",{id:"migrationspattern-is-removed-in-favour-of-migrationsglob"},(0,o.kt)("inlineCode",{parentName:"h2"},"migrations.pattern")," is removed in favour of ",(0,o.kt)("inlineCode",{parentName:"h2"},"migrations.glob")),(0,o.kt)("p",null,"Migrations are using ",(0,o.kt)("inlineCode",{parentName:"p"},"umzug")," under the hood, which is now upgraded to v3.0.\nWith this version, the ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern")," configuration options is no longer available,\nand has been replaced with ",(0,o.kt)("inlineCode",{parentName:"p"},"glob"),". This change is also reflected in MikroORM."),(0,o.kt)("p",null,"The default value for ",(0,o.kt)("inlineCode",{parentName:"p"},"glob")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"!(*.d).{js,ts}"),", so both JS and TS files are matched\n(but not .d.ts files). You should usually not need to change this option as this default\nsuits both development and production environments."),(0,o.kt)("h2",{id:"population-no-longer-infers-the-where-condition-by-default"},"Population no longer infers the where condition by default"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This applies only to SELECT_IN strategy, as JOINED strategy implies the inference.")),(0,o.kt)("p",null,"Previously when we used populate hints in ",(0,o.kt)("inlineCode",{parentName:"p"},"em.find()")," and similar methods, the\nquery for our entity would be analysed and parts of it extracted and used for\nthe population. Following example would find all authors that have books with\ngiven IDs, and populate their books collection, again using this PK condition,\nresulting in only such books being in those collections. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// this would end up with `Author.books` collections having only books of PK 1, 2, 3\nconst a = await em.find(Author, { books: [1, 2, 3] }, { populate: ['books'] });\n")),(0,o.kt)("p",null,"Following this example, if we wanted to load all books, we would need a separate\n",(0,o.kt)("inlineCode",{parentName:"p"},"em.populate()")," call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const a = await em.find(Author, { books: [1, 2, 3] });\nawait em.populate(a, ['books']);\n")),(0,o.kt)("p",null,"This behaviour changed and is now configurable both globally and locally, via\n",(0,o.kt)("inlineCode",{parentName:"p"},"populateWhere")," option. Globally we can specify one of ",(0,o.kt)("inlineCode",{parentName:"p"},"PopulateHint.ALL")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"PopulateHint.INFER"),", the former being the default in v5, the latter being the\ndefault behaviour in v4. Locally (via ",(0,o.kt)("inlineCode",{parentName:"p"},"FindOptions"),") we can also specify custom\nwhere condition that will be passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"em.populate()")," call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// revert back to the old behaviour locally\nconst a = await em.find(Author, { books: [1, 2, 3] }, {\n  populate: ['books'],\n  populateWhere: PopulateHint.INFER,\n});\n")),(0,o.kt)("h2",{id:"emcreate-respects-required-properties"},(0,o.kt)("inlineCode",{parentName:"h2"},"em.create()")," respects required properties"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"em.create()")," will now require you to pass all non-optional properties. Some\nproperties might be defined as required for TS, but we have a default value for\nthem (either runtime, or database one) - for such we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalProps"),"\nsymbol to specify which properties should be considered as optional."),(0,o.kt)("h2",{id:"required-properties-are-validated-before-insert"},"Required properties are validated before insert"),(0,o.kt)("p",null,"Previously the validation took place in the database, so it worked only for SQL\ndrivers. Now we have runtime validation based on the entity metadata. This means\nmongo users now need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"nullable: true")," on their optional properties, or\ndisable the validation globally via ",(0,o.kt)("inlineCode",{parentName:"p"},"validateRequired: false")," in the ORM config."),(0,o.kt)("h2",{id:"primarykeytype-symbol-should-be-defined-as-optional"},(0,o.kt)("inlineCode",{parentName:"h2"},"PrimaryKeyType")," symbol should be defined as optional"),(0,o.kt)("p",null,"Previously when we had nonstandard PK types, we could use ",(0,o.kt)("inlineCode",{parentName:"p"},"PrimaryKeyType")," symbol\nto let the type system know it. It was required to define this property as\nrequired, now it can be defined as optional too."))}c.isMDXComponent=!0}}]);