import{f as N,E as V,h as j,j as E,k as Z,s as W,m as G,n as $,o as A,b as K,t as s,p as M}from"./codemirror-6fc21a12.js";import"./vendor-a7b34205.js";import"./use-save-confirm-3e742716.js";import"./toggle-e7c686f7.js";import"./index-66557411.js";import"./use-react-1ab208ae.js";const Y=34,x=1,F=2,g=3,f=4,H=5,J=6,ee=7,te=8,ae=9,re=10,ne=11,oe=12,se=13,ie=14,le=15,ce=16,de=17,me=18,ue=19,C=20,S=21,pe=22;function b(t){return t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57}function fe(t){return t>=48&&t<=57||t>=97&&t<=102||t>=65&&t<=70}function u(t,e,n){for(let a=!1;;){if(t.next<0)return;if(t.next==e&&!a){t.advance();return}a=n&&!a&&t.next==92,t.advance()}}function q(t,e){for(;!(t.next!=95&&!b(t.next));)e!=null&&(e+=String.fromCharCode(t.next)),t.advance();return e}function ge(t){if(t.next==39||t.next==34||t.next==96){let e=t.next;t.advance(),u(t,e,!1)}else q(t)}function O(t,e){for(;;){if(t.next==46){if(e)break;e=!0}else if(t.next<48||t.next>57)break;t.advance()}if(t.next==69||t.next==101)for(t.advance(),(t.next==43||t.next==45)&&t.advance();t.next>=48&&t.next<=57;)t.advance()}function k(t){for(;!(t.next<0||t.next==10);)t.advance()}function m(t,e){for(let n=0;n<e.length;n++)if(e.charCodeAt(n)==t)return!0;return!1}const w=` 	\r
`;function P(t,e,n){let a=Object.create(null);a.true=a.false=H,a.null=a.unknown=J;for(let r of t.split(" "))r&&(a[r]=C);for(let r of e.split(" "))r&&(a[r]=S);for(let r of(n||"").split(" "))r&&(a[r]=pe);return a}const c="array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ",d="absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ",h={backslashEscapes:!1,hashComments:!1,spaceAfterDashes:!1,slashComments:!1,doubleQuotedStrings:!1,charSetCasts:!1,operatorChars:"*+-%<>!=&|~^/",specialVar:"?",identifierQuotes:'"',words:P(d,c)};function _e(t,e,n,a){let r={};for(let o in h)r[o]=(t.hasOwnProperty(o)?t:h)[o];return e&&(r.words=P(e,n||"",a)),r}function T(t){return new V(e=>{var n;let{next:a}=e;if(e.advance(),m(a,w)){for(;m(e.next,w);)e.advance();e.acceptToken(Y)}else if(a==39||a==34&&t.doubleQuotedStrings)u(e,a,t.backslashEscapes),e.acceptToken(g);else if(a==35&&t.hashComments||a==47&&e.next==47&&t.slashComments)k(e),e.acceptToken(x);else if(a==45&&e.next==45&&(!t.spaceAfterDashes||e.peek(2)==32))k(e),e.acceptToken(x);else if(a==47&&e.next==42){e.advance();for(let r=-1,o=1;!(e.next<0);)if(e.advance(),r==42&&e.next==47){if(o--,!o)break;r=-1}else r==47&&e.next==42?(o++,r=-1):r=e.next;e.acceptToken(F)}else if((a==101||a==69)&&e.next==39)e.advance(),u(e,39,!0);else if((a==110||a==78)&&e.next==39&&t.charSetCasts)e.advance(),u(e,39,t.backslashEscapes),e.acceptToken(g);else if(a==95&&t.charSetCasts)for(let r=0;;r++){if(e.next==39&&r>1){e.advance(),u(e,39,t.backslashEscapes),e.acceptToken(g);break}if(!b(e.next))break;e.advance()}else if(a==40)e.acceptToken(ee);else if(a==41)e.acceptToken(te);else if(a==123)e.acceptToken(ae);else if(a==125)e.acceptToken(re);else if(a==91)e.acceptToken(ne);else if(a==93)e.acceptToken(oe);else if(a==59)e.acceptToken(se);else if(a==48&&(e.next==98||e.next==66)||(a==98||a==66)&&e.next==39){let r=e.next==39;for(e.advance();e.next==48||e.next==49;)e.advance();r&&e.next==39&&e.advance(),e.acceptToken(f)}else if(a==48&&(e.next==120||e.next==88)||(a==120||a==88)&&e.next==39){let r=e.next==39;for(e.advance();fe(e.next);)e.advance();r&&e.next==39&&e.advance(),e.acceptToken(f)}else if(a==46&&e.next>=48&&e.next<=57)O(e,!0),e.acceptToken(f);else if(a==46)e.acceptToken(ie);else if(a>=48&&a<=57)O(e,!1),e.acceptToken(f);else if(m(a,t.operatorChars)){for(;m(e.next,t.operatorChars);)e.advance();e.acceptToken(le)}else if(m(a,t.specialVar))e.next==a&&e.advance(),ge(e),e.acceptToken(de);else if(m(a,t.identifierQuotes))u(e,a,!1),e.acceptToken(ue);else if(a==58||a==44)e.acceptToken(ce);else if(b(a)){let r=q(e,String.fromCharCode(a));e.acceptToken((n=t.words[r.toLowerCase()])!==null&&n!==void 0?n:me)}})}const z=T(h),be=M.deserialize({version:13,states:"%dQ]QQOOO#kQRO'#DQO#rQQO'#CuO%RQQO'#CvO%YQQO'#CwO%aQQO'#CxOOQQ'#DQ'#DQOOQQ'#C{'#C{O&lQRO'#CyOOQQ'#Ct'#CtOOQQ'#Cz'#CzQ]QQOOQOQQOOO&vQQO,59aO'RQQO,59aO'WQQO'#DQOOQQ,59b,59bO'eQQO,59bOOQQ,59c,59cO'lQQO,59cOOQQ,59d,59dO'sQQO,59dOOQQ-E6y-E6yOOQQ,59`,59`OOQQ-E6x-E6xOOQQ'#C|'#C|OOQQ1G.{1G.{O&vQQO1G.{OOQQ1G.|1G.|OOQQ1G.}1G.}OOQQ1G/O1G/OP'zQQO'#C{POQQ-E6z-E6zOOQQ7+$g7+$g",stateData:"(R~OrOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUO~O^]ORtXStXTtXUtXVtXXtXZtX]tX_tX`tXatXbtXctXdtXetXftX~OqtX~P!dOa^Ob^Oc^O~ORUOSUOTUOUUOVROXSOZTO^QO_UO`UOa_Ob_Oc_OdUOeUOfUO~OW`O~P#}OYbO~P#}O[dO~P#}ORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUO~O]gOqmX~P%hOaiObiOciO~O^kO~OWtXYtX[tX~P!dOWlO~P#}OYmO~P#}O[nO~P#}O]gO~P#}O",goto:"#YuPPPPPPPPPPPPPPPPPPPPPPPPvzzzz!W![!b!vPPP!|TYOZeUORSTWZaceoT[OZQZORhZSWOZQaRQcSQeTZfWaceoQj]RqkeVORSTWZaceo",nodeNames:"\u26A0 LineComment BlockComment String Number Bool Null ( ) [ ] { } ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",maxTerm:36,skippedNodes:[0,1,2],repeatNodeCount:3,tokenData:"RORO",tokenizers:[0,z],topRules:{Script:[0,23]},tokenPrec:0});function _(t){let e=t.cursor.moveTo(t.from,-1);for(;/Comment/.test(e.name);)e.moveTo(e.from,-1);return e.node}function Q(t){let e=/^[`'"](.*)[`'"]$/.exec(t);return e?e[1]:t}function he(t,e){let n=W(t).resolveInner(e,-1),a=!1;if(n.name=="Identifier"||n.name=="QuotedIdentifier"){a=!1;let r=null,o=_(n);if(o&&o.name=="."){let i=_(o);(i&&i.name=="Identifier"||i.name=="QuotedIdentifier")&&(r=Q(t.sliceDoc(i.from,i.to).toLowerCase()))}return{parent:r,from:n.from,quoted:n.name=="QuotedIdentifier"?t.sliceDoc(n.from,n.from+1):null}}else if(n.name=="."){let r=_(n);if(r&&r.name=="Identifier"||r.name=="QuotedIdentifier")return{parent:Q(t.sliceDoc(r.from,r.to).toLowerCase()),from:e,quoted:null}}else a=!0;return{parent:null,from:e,quoted:null,empty:a}}function ye(t,e){return t?e.map(n=>Object.assign(Object.assign({},n),{label:t+n.label+t,apply:void 0})):e}const ve=/^\w*$/,xe=/^[`'"]?\w*[`'"]?$/;function Oe(t,e,n){let a=Object.create(null);for(let o in t)a[o]=t[o].map(i=>typeof i=="string"?{label:i,type:"property"}:i);let r=(e||Object.keys(a).map(o=>({label:o,type:"type"}))).concat(n&&a[n]||[]);return o=>{let{parent:i,from:B,quoted:p,empty:I}=he(o.state,o.pos);if(I&&!o.explicit)return null;let y=r;if(i){let v=a[i];if(!v)return null;y=v}let D=p&&o.state.sliceDoc(o.pos,o.pos+1)==p;return{from:B,to:D?o.pos+1:void 0,options:ye(p,y),span:p?xe:ve}}}function ke(t,e){let n=Object.keys(t).map(a=>({label:e?a.toUpperCase():a,type:t[a]==S?"type":t[a]==C?"keyword":"variable",boost:-1}));return j(["QuotedIdentifier","SpecialVar","String","LineComment","BlockComment","."],E(n))}let we=be.configure({props:[G.add({Statement:$()}),A.add({Statement(t){return{from:t.firstChild.to,to:t.to}},BlockComment(t){return{from:t.from+2,to:t.to-2}}}),K({Keyword:s.keyword,Type:s.typeName,Builtin:s.standard(s.name),Bool:s.bool,Null:s.null,Number:s.number,String:s.string,Identifier:s.name,QuotedIdentifier:s.special(s.string),SpecialVar:s.special(s.name),LineComment:s.lineComment,BlockComment:s.blockComment,Operator:s.operator,"Semi Punctuation":s.punctuation,"( )":s.paren,"{ }":s.brace,"[ ]":s.squareBracket})]});class l{constructor(e,n){this.dialect=e,this.language=n}get extension(){return this.language.extension}static define(e){let n=_e(e,e.keywords,e.types,e.builtin),a=N.define({parser:we.configure({tokenizers:[{from:z,to:T(n)}]}),languageData:{commentTokens:{line:"--",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}});return new l(n,a)}}function Qe(t,e=!1){return t.language.data.of({autocomplete:ke(t.dialect.words,e)})}function Ce(t){return t.schema?(t.dialect||U).language.data.of({autocomplete:Oe(t.schema,t.tables,t.defaultTable)}):[]}function Le(t={}){let e=t.dialect||U;return new Z(e.language,[Ce(t),Qe(e,!!t.upperCaseKeywords)])}const U=l.define({}),Xe=l.define({charSetCasts:!0,operatorChars:"+-*/<>=~!@#%^&|`?",specialVar:"",keywords:d+"a abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom c cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion g generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull k key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower m mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner p parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time t table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",types:c+"bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml"}),L="accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill",X=c+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed",R="charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee",Re=l.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:d+"group_concat "+L,types:X,builtin:R}),Be=l.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:d+"always generated groupby_concat hard persistent shutdown soft virtual "+L,types:X,builtin:R}),Ie=l.define({keywords:d+"trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock pivot readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx unpivot updlock with",types:c+"bigint smallint smallmoney tinyint money real text nvarchar ntext varbinary image hierarchyid uniqueidentifier sql_variant xml",builtin:"binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id",operatorChars:"*+-%<>!=^&|/",specialVar:"@"}),De=l.define({keywords:d+"abort analyze attach autoincrement conflict database detach exclusive fail glob ignore index indexed instead isnull notnull offset plan pragma query raise regexp reindex rename replace temp vacuum virtual",types:c+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int2 int8 unsigned signed real",builtin:"auth backup bail changes clone databases dbinfo dump echo eqp explain fullschema headers help import imposter indexes iotrace lint load log mode nullvalue once print prompt quit restore save scanstats separator shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width",operatorChars:"*+-%<>!=&|/~",identifierQuotes:'`"',specialVar:"@:?$"}),Ne=l.define({keywords:"add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime infinity NaN",types:c+"ascii bigint blob counter frozen inet list map static text timeuuid tuple uuid varint",slashComments:!0}),Ve=l.define({keywords:d+"abort accept access add all alter and any arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body by case cast char_base check close cluster clusters colauth column comment commit compress connected constant constraint crash create current currval cursor data_base database dba deallocate debugoff debugon declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry exception exception_init exchange exclusive exists external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base of off offline on online only option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw rebuild record ref references refresh rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work",builtin:"appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define echo editfile embedded feedback flagger flush heading headsep instance linesize lno loboffset logsource longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar repfooter repheader serveroutput shiftinout show showmode spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout timing trimout trimspool ttitle underline verify version wrap",types:c+"ascii bfile bfilename bigserial bit blob dec long number nvarchar nvarchar2 serial smallint string text uid varchar2 xml",operatorChars:"*/+-%<>!=~",doubleQuotedStrings:!0,charSetCasts:!0});export{Ne as Cassandra,Ie as MSSQL,Be as MariaSQL,Re as MySQL,Ve as PLSQL,Xe as PostgreSQL,l as SQLDialect,De as SQLite,U as StandardSQL,Qe as keywordCompletion,Ce as schemaCompletion,Le as sql};
