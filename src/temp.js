let parseString = require('xml2js').parseString;

let xml = '<?xml version="1.0" encoding="UTF-8"?> <data name="piece-shipment-list" code="0" request-id="60c801e3-9559-49c5-8e28-30d26c76dbac"><data name="piece-shipment" error-status="0" piece-id="dd35e651-724b-4c5a-a438-ecf739afa037" shipment-code="" piece-identifier="62606324990" identifier-type="1" piece-code="626063249902" event-location="" event-country="DE" status-liste="#" status-timestamp="24.03.2017 16:25" status="Der EmpfÃ¤nger hat die Sendung aus der PACKSTATION abgeholt." short-status="Zustellung erfolgreich" recipient-name="Ulrich Kievernagel" recipient-street="139" recipient-city="53113 BONN" pan-recipient-name="ULRICH KIEVERNAGEL 1185831" pan-recipient-street="139" pan-recipient-city="53113 BONN" pan-recipient-address="139 53113 BONN" pan-recipient-postalcode="53113" pan-recipient-postalnumber="1185831" pan-recipient-email="SILKE.KIEVERNAGEL@GMAIL.COM" shipper-name="FIEGE ZWEIGNIEDERLASSUNG SEHNDE" shipper-street="SCHNEDEBRUCH 12" shipper-city="31319 SEHNDE" shipper-address="SCHNEDEBRUCH 12 31319 SEHNDE" product-code="00" product-key="48629" product-name="DHL PAKET, Leitcodenachentgelt" delivery-event-flag="1" recipient-id="" recipient-id-text="" upu="" shipment-length="0.3" shipment-width="0.2" shipment-height="0.05" shipment-weight="0.739" international-flag="0" division="DPEED" ice="DLVRD" ric="ACCPK" standard-event-code="ZU" dest-country="DE" origin-country="DE" searched-piece-code="626063249902" searched-ref-no="" piece-customer-reference="17AL0265894" shipment-customer-reference="" leitcode="53113000000008" routing-code-ean="" matchcode="" domestic-id="" airway-bill-number="" ruecksendung="false" pslz-nr="6581215520" order-preferred-delivery-day="false" cod-amount="" cod-currency="" notification-card-printed="false" has-digital-notification-cases="false" preferred-delivery-day="" preferred-delivery-timeframe-from="" preferred-delivery-timeframe-to="" preferred-timeframe-refused-text=""><data name="piece-event-list" piece-identifier="62606324990" _build-time="2017-10-08 00:25:13.000895" piece-id="dd35e651-724b-4c5a-a438-ecf739afa037" leitcode="5311300000000" routing-code-ean="" ruecksendung="false" pslz-nr="6581215520" order-preferred-delivery-day="false"><data name="piece-event" event-timestamp="23.03.2017 19:33" event-status="Die Auftragsdaten zu dieser Sendung wurden vom Absender elektronisch an DHL Ã¼bermittelt." event-text="Die Auftragsdaten zu dieser Sendung wurden vom Absender elektronisch an DHL Ã¼bermittelt." event-short-status="Auftragsdaten elektronisch Ã¼bermittelt" ice="PARCV" ric="NRQRD" event-location="" event-country="" standard-event-code="VA" ruecksendung="false" /><data name="piece-event" event-timestamp="23.03.2017 20:31" event-status="Die Sendung wurde im Start-Paketzentrum bearbeitet." event-text="Die Sendung wurde im Start-Paketzentrum bearbeitet." event-short-status="Start-Paketzentrum" ice="LDTMV" ric="MVMTV" event-location="Hannover" event-country="Deutschland" standard-event-code="AA" ruecksendung="false" /><data name="piece-event" event-timestamp="24.03.2017 03:34" event-status="Die Sendung wurde im Ziel-Paketzentrum bearbeitet." event-text="Die Sendung wurde im Ziel-Paketzentrum bearbeitet." event-short-status="Ziel-Paketzentrum" ice="ULFMV" ric="UNLDD" event-location="Neuwied" event-country="Deutschland" standard-event-code="EE" ruecksendung="false" /><data name="piece-event" event-timestamp="24.03.2017 04:35" event-status="Die Sendung wurde im Paketzentrum bearbeitet." event-text="Die Sendung wurde im Paketzentrum bearbeitet." event-short-status="Sendung in Bearbeitung" ice="SRTED" ric="NRQRD" event-location="Neuwied" event-country="Deutschland" standard-event-code="NB" ruecksendung="false" /><data name="piece-event" event-timestamp="24.03.2017 04:41" event-status="Die Sendung wurde im Ziel-Paketzentrum bearbeitet." event-text="Die Sendung wurde im Ziel-Paketzentrum bearbeitet." event-short-status="Ziel-Paketzentrum" ice="ULFMV" ric="UNLDD" event-location="Neuwied" event-country="Deutschland" standard-event-code="EE" ruecksendung="false" /><data name="piece-event" event-timestamp="24.03.2017 09:21" event-status="Die Sendung wurde in das Zustellfahrzeug geladen." event-text="Die Sendung wurde in das Zustellfahrzeug geladen." event-short-status="In Zustellung" ice="SRTED" ric="NRQRD" event-location="" event-country="" standard-event-code="PO" ruecksendung="false" /><data name="piece-event" event-timestamp="24.03.2017 09:21" event-status="Die Sendung befindet sich auf dem Weg zur Packstaion." event-text="Die Sendung befindet sich auf dem Weg zur Packstaion." event-short-status="In Zustellung" ice="LDTMV" ric="PCKST" event-location="" event-country="Deutschland" standard-event-code="PO" ruecksendung="false" /><data name="piece-event" event-timestamp="24.03.2017 15:54" event-status="Die Sendung liegt in der &lt;a href="http://standorte.deutschepost.de/Standortsuche?standorttyp=packstation_paketbox&amp;pmtype=1&amp;ort=Bonn&amp;strasse=Heinrich-Br%C3%BCning-Str.&amp;hausnummer=5&amp;postleitzahl=53113&amp;lang=de" class="arrowLink" target="_blank"&gt;&lt;span class="arrow"&gt;&lt;/span&gt;PACKSTATION 139 Heinrich-BrÃ¼ning-Str. 5 53113 Bonn&lt;/a&gt; zur Abholung bereit." event-text="Die Sendung liegt in der &lt;a href="http://standorte.deutschepost.de/Standortsuche?standorttyp=packstation_paketbox&amp;pmtype=1&amp;ort=Bonn&amp;strasse=Heinrich-Br%C3%BCning-Str.&amp;hausnummer=5&amp;postleitzahl=53113&amp;lang=de" class="arrowLink" target="_blank"&gt;&lt;span class="arrow"&gt;&lt;/span&gt;PACKSTATION 139 Heinrich-BrÃ¼ning-Str. 5 53113 Bonn&lt;/a&gt; zur Abholung bereit." event-short-status="Sendung bereit zur Abholung aus PACKSTATION" ice="HLDCC" ric="LDPCK" event-location="Bonn" event-country="Deutschland" standard-event-code="ZF" ruecksendung="false" /><data name="piece-event" event-timestamp="24.03.2017 16:25" event-status="Der EmpfÃ¤nger hat die Sendung aus der PACKSTATION abgeholt." event-text="Der EmpfÃ¤nger hat die Sendung aus der PACKSTATION abgeholt." event-short-status="Zustellung erfolgreich" ice="DLVRD" ric="ACCPK" event-location="Bonn" event-country="Deutschland" standard-event-code="ZU" ruecksendung="false" /></data></data></data>';

console.log(xml);
parseString(xml, (err, result) => {
  console.dir(result);
});
